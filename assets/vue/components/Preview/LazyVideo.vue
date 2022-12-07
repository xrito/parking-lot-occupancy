<script setup lang="ts">
import {onBeforeUnmount, onMounted, onUnmounted, ref} from "vue";

const RETRY_TIMEOUT = 1000;
const SYNCHRONIZE_TIMEOUT = 5000;

const streamLoaded = () => {
  loaded.value = true;
  setTimeout(synchronizeStream, SYNCHRONIZE_TIMEOUT)
}
const synchronizeStream = () => {
  if (videoElement.value !== null) {
    videoElement.value!.onerror = () => {};
    videoElement.value!.onloadeddata = () => {};
    loadStream();
  }
}
const retryLoadStream = (e) => {
  setTimeout(loadStream, RETRY_TIMEOUT)
}
const loadStream = () => {
  if (videoElement.value !== null) {
    videoElement.value.src = props.src + "?" + Date.now();
    if (!loaded.value) {
      videoElement.value.onerror = retryLoadStream;
      videoElement.value.onloadeddata = streamLoaded;
    }
  }
}
const stopStreamLoading = () => {
  if (videoElement.value !== null) {
    videoElement.value!.src = "";
  }
}
const videoElement = ref<HTMLVideoElement | null>(null);
const loaded = ref(false);

interface Props {
  src: string;
  width: number;
  height: number;
}

const props = defineProps<Props>()
onMounted(loadStream);
onBeforeUnmount(stopStreamLoading);
</script>

<template>
  <div class="lazy-video d-flex justify-content-center align-items-center">
    <video ref="videoElement" :width="width" :height="height"  autoplay muted />
    <div class="spinner-grow" v-if="!loaded"></div>
  </div>
</template>


<style scoped>

.lazy-video {
  width: 100%;
  height: 100%;
  background-color: #868e96;
}

.spinner-grow{
  position: absolute;
}
.lazy-video video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
