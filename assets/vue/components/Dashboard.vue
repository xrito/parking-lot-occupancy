<script>
import AddCameraButton from "./AddCameraButton";
import CameraFormModal from "./CameraFormModal";
import ParkingPreview from "./ParkingPreview";
import ParkingRepository from "../../src/Repository/ParkingRepository";


export default {
  name: "Dashboard",
  components: {ParkingPreview, AddCameraButton, CameraFormModal},
  data: function () {
    return {
      parkingPreviews: [],
      cameraFormId: "camera-form"
    }
  },
  created() {
    this.getParkingPreviews();
  },
  methods: {
    getParkingPreviews: async function() {
      const {data} = await ParkingRepository.all()
      this.parkingPreviews = data;
    }
  },
}
</script>
<template>
  <div class="overflow-auto py-5" style="width: 100%">
    <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <AddCameraButton :modalId="cameraFormId"/>
        <ParkingPreview v-for="parkingPreview in parkingPreviews"
                        :id="parkingPreview.id"
                        :preview="parkingPreview.preview"/>
      </div>
    </div>
  </div>
  <CameraFormModal :id="cameraFormId" :previews="parkingPreviews" />
</template>


<style scoped>
</style>
