
<script setup lang="ts">
import {onMounted, ref} from "vue";

const RETRY_TIMEOUT = 1000;

const loadImage = () => {
  if (imageElement.value !== null) {
    imageElement.value.src = props.src + "?" + Date.now();
    if (!loaded.value) {
      imageElement.value.onerror = () => {
        setTimeout(loadImage, RETRY_TIMEOUT)
      }
      imageElement.value.onload = function () {
        loading.value = false;
        loaded.value = true;
      }
    }
  }
}
const imageElement = ref<HTMLImageElement | null>(null);
const loading = ref(true);
const loaded = ref(false);
interface Props {
  src: string;
  width: number;
  height: number;
}
const props = defineProps<Props>()
onMounted(loadImage);
</script>

<template>
  <div class="lazy-img d-flex justify-content-center align-items-center">
    <img ref="imageElement" v-show="loaded" :width="width" :height="height"/>
    <div class="spinner-grow" v-if="loading"></div>
  </div>
</template>


<style scoped>

.lazy-img {
  width: 100%;
  height: 100%;
  background-color: #868e96;
}

.lazy-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
