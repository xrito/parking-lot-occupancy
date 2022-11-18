<script setup lang="ts">
import ParkingForm from "../../../src/Model/ParkingForm";
import Image from "../Preview/Image.vue";

defineProps({
  id: {
    type: String,
    required: true
  },
  preview: {
    type: String,
    required: true
  }
})


interface Emits {
  (e: 'removeParking', id: string): void
}
defineEmits<Emits>();
</script>

<template>
  <div class="col">
    <div class="card shadow-sm">
      <Image :image="preview"/>
      <div class="card-body">
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <RouterLink class="btn btn-sm btn-outline-secondary" :to="{ name: 'parking', params: {id: id } }">
              Редактировать
            </RouterLink>
            <button @click="$emit('removeParking', id)" type="button" class="btn btn-sm btn-outline-danger">Удалить</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>

.card-button div {
  height: 25px;
}

</style>
