<template>
  <div class="card-img card-img-top d-flex justify-content-center align-items-center">
    <img ref="imageElement" v-show="loaded"/>
    <div class="spinner-grow" v-if="loading"></div>
  </div>
</template>

<script setup lang="ts">
import {defineProps, onMounted, ref} from "vue";

const RETRY_TIMEOUT = 1000;
const RELOAD_TIMEOUT = 2000;

const loadImage = () => {
  if (imageElement.value !== null) {
    imageElement.value.src = props.image + "?" + Date.now();
    if (!loaded.value) {
      imageElement.value.onerror = () => setTimeout(loadImage, RETRY_TIMEOUT)
      imageElement.value.onload = function () {
        loading.value = false;
        loaded.value = true;
        setTimeout(loadImage, RELOAD_TIMEOUT)
      }
    }
  }
}
const imageElement = ref<HTMLImageElement | null>(null);
const loading = ref(true);
const loaded = ref(false);
const props = defineProps({
  image: {
    type: String,
    required: true
  }
})
onMounted(loadImage);
</script>

<style scoped>

.card-img {
  width: 100%;
  height: 250px;
  background-color: #868e96;
}

.card-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
