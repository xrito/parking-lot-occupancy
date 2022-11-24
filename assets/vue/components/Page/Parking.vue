<script setup lang="ts">
import {useRouter} from "vue-router";
import {onMounted, onUnmounted, ref} from "vue";
import type Parking from "../../../src/Model/Parking";
import type SpotCollection from "../../../src/Model/SpotCollection";
import ParkingService from "../../../src/Service/ParkingService";
import ParkingRepository from "../../../src/Repository/ParkingRepository";
import {fabric} from "fabric";

const router = useRouter();
const parking = ref<Parking>();
const canvasElement = ref<HTMLCanvasElement>();
let parkingService = ref<ParkingService>();
const monitoringType = ref<string>();
monitoringType.value = 'spot';

const onSwitchMonitoringType = function () {
  if(parkingService.value !== undefined) {
    parkingService?.value.switchMonitoring(monitoringType.value!);
  }
}
onMounted(async () => {
  const id: string = router.currentRoute.value.params.id.toString();
  parking.value = (await ParkingRepository.get(id)).data;
  const cameraCanvas = new fabric.Canvas(canvasElement.value!);
  const ttl = 300;
  parkingService.value = new ParkingService(
      id,
      parking.value.spots,
      cameraCanvas,
      ttl,
      '/api/detection/spots/' + id,
      '/api/detection/predictions/' + id);
  parkingService.value.loadSpots();
  parkingService.value.switchMonitoring(monitoringType.value!);
});
onUnmounted(() => {
  parkingService.value?.deactivate();
});
</script>
<template>
  <div class="container py-5">
    <div class="d-flex flex-row">
      <div class="col">
        <div id="camera" style="width: 640px;height: 360px">
          <img :src="parking?.stream" width="640" height="360">
          <canvas ref="canvasElement" width="640" height="360"></canvas>
        </div>
      </div>
      <div id="control" class="d-flex flex-column justify-content-between">
        <div class="btn-group-vertical">
          <button type="button" @click="parkingService.addSpot" class="btn btn-success">Add Spot</button>
          <button type="button" @click="parkingService.removeSpot" class="btn btn-danger">Remove</button>
        </div>
        <div class="btn-group-vertical" role="group">
          <input type="radio" class="btn-check" @change="onSwitchMonitoringType" name="show" value="prediction"
                 v-model="monitoringType" id="vbtn-radio1" autocomplete="off"
                 checked>
          <label class="btn btn-outline-primary" for="vbtn-radio1">Prediction</label>
          <input type="radio" class="btn-check" @change="onSwitchMonitoringType" name="show" value="spot"
                 v-model="monitoringType" id="vbtn-radio2" autocomplete="off">
          <label class="btn btn-outline-primary" for="vbtn-radio2">Spots</label>
        </div>
      </div>
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
