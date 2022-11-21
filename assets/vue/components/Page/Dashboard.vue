<script setup lang="ts">
import AddCameraButton from "../Preview/AddCameraButton.vue";
import CameraFormModal from "../Modal/CameraFormModal.vue";
import ParkingPreview from "../Preview/ParkingPreview.vue";
import ParkingRepository from "../../../src/Repository/ParkingRepository";
import {onMounted,  ref} from "vue";
import type ParkingForm from "../../../src/Model/ParkingForm";
import type Parking from "../../../src/Model/Parking";

const parkingPreviews = ref([] as Parking[]);
const cameraFormId = "camera-form"

onMounted( async () => {
  parkingPreviews.value = ((await ParkingRepository.all()).data) || [];
});

const addParking = function (form: ParkingForm, closeModal: () => void) {
  ParkingRepository.create(form).then((response) => {
    closeModal();
    parkingPreviews.value.unshift(response.data);
    //router.push({ name: 'parking', params: { id: response.data.id } })
    //
  });
}
const removeParking = function (id: string) {
  const index = parkingPreviews.value.findIndex((value) => value.id === id);
  parkingPreviews.value.splice(index, 1);
  ParkingRepository.remove(id);
}
</script>
<template>
  <div class="overflow-auto py-5" style="width: 100%">
    <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <AddCameraButton :modalId="cameraFormId"/>
        <ParkingPreview
                        @removeParking="removeParking"
                        v-for="parkingPreview in parkingPreviews"
                        :key="parkingPreview.id"
                        :id="parkingPreview.id"
                        :preview="parkingPreview.preview"/>
      </div>
    </div>
  </div>
  <CameraFormModal @addParking="addParking" :id="cameraFormId" :previews="parkingPreviews" />
</template>

<style scoped>
</style>
