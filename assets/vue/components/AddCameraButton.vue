<template>
  <div class="col">
    <div data-bs-toggle="modal" :data-bs-target="'#'+modalId" class="card-button btn btn-secondary shadow-sm  ">
      <div>+</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddCameraButton",
  mounted() {

  },
  props: {
    modalId: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

.card-button {
  height: 315px;
  width: 100%;
  font-weight: bold;
  font-size: 100px;
  line-height: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-button div {
  height: 25px;
}

</style>
