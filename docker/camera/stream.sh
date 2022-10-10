#!/bin/bash

trap "exit" INT TERM ERR
trap "kill 0" EXIT

ffserver -hide_banner -loglevel ${FFSERVER_LOG_LEVEL} &
ffmpeg -hide_banner -loglevel ${FFMPEG_LOG_LEVEL} -rtsp_transport tcp -i ${RTSP_URL} \
-i "/public/watermark.png" -filter_complex overlay=shortest=1 http://127.0.0.1:8090/feed.ffm
