<template>
  <div class="modal fade" :id="id" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <form @submit.prevent="addParking" ref="form" method="post">
          <div class="modal-header">
            <h1 class="modal-title fs-5">URL Адрес камеры</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" ref="close" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <input v-model="form.stream" name="stream" type="url" class="form-control" placeholder="http://192.168.0.1/stream2">
          </div>
          <div class="modal-footer">
            <button type="submit" class="btn btn-primary">Продолжить</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import ParkingRepository from "../../src/Repository/ParkingRepository";

export default {
  name: "CameraFormModal",
  data() {
    return {
      form: {
        stream: "",
      },
    };
  },
  props: {
    id: {
      type: String,
      required: true
    },
    previews: {
      type: Array,
      required: true
    }
  },
  methods: {
    addParking() {
      ParkingRepository.create(this.form) .then((response) => {
        this.$refs.close.click();
        this.$refs.form.reset();
        //router.push({ name: 'parking', params: { id: response.data.id } })
        this.$props.previews.unshift(response.data);
      });
    }
  }
}
</script>

<style scoped>

</style>
