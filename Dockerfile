ARG CADDY_VERSION=2
FROM php:8.0.24-fpm-alpine3.15 AS backend
# persistent / runtime deps
RUN apk add --no-cache \
    --repository http://dl-cdn.alpinelinux.org/alpine/v3.12/community \
		acl \
		fcgi \
		file \
		gettext \
		git \
		gnu-libiconv=1.15-r2 \
        bash \
        less \
        php8-pecl-imagick \
        nodejs \
        npm \
	;

# install gnu-libiconv and set LD_PRELOAD env to make iconv work fully on Alpine image.
# see https://github.com/docker-library/php/issues/240#issuecomment-763112749
ENV LD_PRELOAD /usr/lib/preloadable_libiconv.so

ARG APCU_VERSION=5.1.21
RUN set -eux; \
	apk add --no-cache --virtual .build-deps \
		$PHPIZE_DEPS \
		icu-dev \
		libzip-dev \
		zlib-dev \
        libmemcached-dev \
        freetype \
        libjpeg-turbo \
        libpng \
        freetype-dev \
        libjpeg-turbo-dev \
        libpng-dev \
		libwebp-dev \
        imagemagick \
		imagemagick-dev \
		openssl-dev \
	; \
	\
	docker-php-ext-configure zip; \
	docker-php-ext-configure gd\
          --with-freetype \
          --with-jpeg \
          --with-webp \
    ; \
	docker-php-ext-install -j$(nproc) \
		bcmath \
		exif \
		intl \
		zip \
		gd \
        mysqli \
        pdo_mysql \
        sockets \
	; \
	pecl install \
		apcu-${APCU_VERSION} \
        memcached \
        imagick-3.6.0 \
        xdebug \
        mongodb \
        redis \
	; \
	pecl clear-cache; \
	docker-php-ext-enable \
		apcu \
		opcache \
        memcached \
        imagick \
        mongodb \
        redis \
	; \
    rm -r /tmp/pear; \
	\
	runDeps="$( \
		scanelf --needed --nobanner --format '%n#p' --recursive /usr/local/lib/php/extensions \
			| tr ',' '\n' \
			| sort -u \
			| awk 'system("[ -e /usr/local/lib/" $1 " ]") == 0 { next } { print "so:" $1 }' \
	)"; \
	apk add --no-cache --virtual .phpexts-rundeps $runDeps; \
	\
	apk del .build-deps

COPY --from=jrottenberg/ffmpeg:3-scratch / /

WORKDIR /var/www/html
COPY docker/backend/php-fpm.d/zz-docker.conf /usr/local/etc/php-fpm.d/zz-docker.conf

COPY docker/backend/docker-entrypoint.sh /usr/local/bin/docker-entrypoint
RUN chmod +x /usr/local/bin/docker-entrypoint

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer
ENV COMPOSER_ALLOW_SUPERUSER=1

ENV PATH="${PATH}:/root/.composer/vendor/bin"
COPY composer.* symfony.* ./

RUN set -eux; \
    if [ -f composer.json ]; then \
		composer install --prefer-dist --no-dev --no-autoloader --no-scripts --no-progress; \
		composer clear-cache; \
    fi

# copy sources
COPY . .
RUN rm -Rf docker/

RUN set -eux; \
	mkdir -p var/cache var/log; \
    if [ -f composer.json ]; then \
		composer dump-autoload --classmap-authoritative --no-dev; \
		composer dump-env prod; \
#		composer run-script --no-dev post-install-cmd; \
		chmod +x bin/console; sync; \
    fi

ENTRYPOINT ["docker-entrypoint"]

FROM backend as backend_dev
RUN rm -f .env.local.php

FROM caddy:${CADDY_VERSION}-builder-alpine AS app_caddy_builder

RUN xcaddy build \
	--with github.com/dunglas/mercure \
	--with github.com/dunglas/mercure/caddy \
	--with github.com/dunglas/vulcain \
	--with github.com/dunglas/vulcain/caddy

FROM caddy:${CADDY_VERSION} AS frontend

COPY --from=app_caddy_builder /usr/bin/caddy /usr/bin/caddy
WORKDIR /var/www/html

COPY docker/caddy/Caddyfile /etc/caddy/Caddyfile

FROM php:8.0.24-cli-alpine AS camera

RUN set -eux; \
	apk add --no-cache --virtual .build-deps \
		$PHPIZE_DEPS \
	; \
	\
	docker-php-ext-configure pcntl --enable-pcntl; \
	docker-php-ext-install -j$(nproc) \
    	pcntl\
    	; \
	pecl install \
        redis \
	; \
	pecl clear-cache; \
	docker-php-ext-enable \
        redis \
	; \
    rm -r /tmp/pear; \
	\
	runDeps="$( \
		scanelf --needed --nobanner --format '%n#p' --recursive /usr/local/lib/php/extensions \
			| tr ',' '\n' \
			| sort -u \
			| awk 'system("[ -e /usr/local/lib/" $1 " ]") == 0 { next } { print "so:" $1 }' \
	)"; \
	apk add --no-cache --virtual .phpexts-rundeps $runDeps; \
	\
	apk del .build-deps

RUN apk add --update supervisor && rm  -rf /tmp/* /var/cache/apk/*

RUN rm /usr/local/bin/php-cgi  \
    && rm /usr/local/bin/phpdbg \
    && rm /usr/src -Rf

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer
ENV COMPOSER_ALLOW_SUPERUSER=1

RUN set -eux; \
    if [ -f composer.json ]; then \
		composer install --prefer-dist --no-dev --no-autoloader --no-scripts --no-progress; \
		composer clear-cache; \
    fi

COPY --from=jrottenberg/ffmpeg:3-scratch / /
COPY docker/camera/app /app
WORKDIR /app
HEALTHCHECK CMD netstat -an | grep 8090 > /dev/null; if [ 0 != $? ]; then exit 1; fi;
ENTRYPOINT ["php", "/app/worker.php"]
