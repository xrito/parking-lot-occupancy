<script setup lang="ts">
import {useRouter} from "vue-router";
import {computed, onMounted, onUnmounted, ref} from "vue";
import type Parking from "../../../src/Model/Parking";
import ParkingService from "../../../src/Service/ParkingService";
import ParkingRepository from "../../../src/Repository/ParkingRepository";
import {fabric} from "fabric";
import {useMeta} from "vue-meta";
import ToolBar from "../Parking/ToolBar.vue";

const router = useRouter();
const parking = ref<Parking>();
const canvasElement = ref<HTMLCanvasElement>();

const id: string = router.currentRoute.value.params.id.toString();

const parkingService = new ParkingService(
    id,
    300,
    '/parking/free_spots/' + id,
    '/parking/predictions/' + id);

const switchMonitoring = (type: string) => parkingService.switchMonitoring(type);

const defaultMonitoringType = 'spot';
const size = {
  width: 640,
  height: 360
};
onMounted(async () => {
  parking.value = (await ParkingRepository.get(id)).data;
  parkingService.init(new fabric.Canvas(canvasElement.value!), parking.value.spots, defaultMonitoringType);
});

onUnmounted(() => {
  parkingService?.deactivate();
});

const title = 'Parking ' + id
const meta = computed(() => ({
  title: parking.value?.name || title,
}));

useMeta(meta);
</script>
<template>
  <div class="container py-5">
    <h1 class="display-5 fw-bold">Parking {{ parking?.name }}</h1>
    <div class="d-flex flex-row">
      <div class="col">
        <div id="camera" :style="{ width: size.width+'px', height: size.height+'px'}">
          <img :src="parking?.stream" :width="size.width" :height="size.height">
          <canvas ref="canvasElement" :width="size.width" :height="size.height"></canvas>
        </div>
      </div>
      <ToolBar
          :default-monitoring-type="defaultMonitoringType"
          @switchMonitoring="switchMonitoring"
          @addSpot="parkingService.addSpot()"
          @removeSpot="parkingService.removeSpot()"/>
    </div>
  </div>
</template>

<style>

#camera {
  width: auto;
  position: relative;
  outline: 1px solid #000;
  margin: 0;
}

#camera img {
  max-width: 100%;
  display: block;
  position: absolute;
  left: 0;
  top: 0;
}
</style>
