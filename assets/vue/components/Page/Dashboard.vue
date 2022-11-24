<script setup lang="ts">
import AddCameraButton from "../Preview/AddCameraButton.vue";
import CameraFormModal from "../Modal/CameraFormModal.vue";
import ParkingPreview from "../Preview/ParkingPreview.vue";
import ParkingRepository from "../../../src/Repository/ParkingRepository";
import {onMounted, ref} from "vue";
import type ParkingForm from "../../../src/Model/ParkingForm";
import type Parking from "../../../src/Model/Parking";
import {useMeta} from "vue-meta";
import type {AxiosError} from "axios";
import type FormError from "../../../src/Form/FormError";
import router from "../../../routes";

const parkingPreviews = ref([] as Parking[]);
const cameraFormId = "camera-form"
const errors = ref<FormError[]>([]);

onMounted(async () => {
  parkingPreviews.value = ((await ParkingRepository.all()).data) || [];
});

const addParking = function (form: ParkingForm, closeModal: () => void) {
  ParkingRepository.create(form).then((response) => {
    closeModal();
    parkingPreviews.value.unshift(response.data);
    router.push({ name: 'parking', params: { id: response.data.id } })
  }, (error: AxiosError<FormError[]>) => {
    errors.value = error.response?.data || [];
  });
}
const removeParking = function (id: string) {
  const index = parkingPreviews.value.findIndex((value) => value.id === id);
  parkingPreviews.value.splice(index, 1);
  ParkingRepository.remove(id);
}
const title = 'Dashboard';
useMeta({
  title: title
});
</script>
<template>
  <div class="overflow-auto py-5" style="width: 100%">
    <div class="container">
      <h1 class="display-5 fw-bold">{{ title }}</h1>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <AddCameraButton :modalId="cameraFormId"/>
        <ParkingPreview
            @removeParking="removeParking"
            v-for="parkingPreview in parkingPreviews"
            :key="parkingPreview.id"
            :id="parkingPreview.id"
            :name="parkingPreview.name"
            :preview="parkingPreview.preview"/>
      </div>
    </div>
  </div>
  <CameraFormModal @addParking="addParking" :id="cameraFormId" :errors="errors" :previews="parkingPreviews"/>
</template>

<style scoped>
</style>
