<script setup lang="ts">
import Image from "../Preview/Image.vue";

interface Props {
  id: string;
  preview: string;
}

defineProps<Props>()


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
              Edit
            </RouterLink>
            <button @click="$emit('removeParking', id)" type="button" class="btn btn-sm btn-outline-danger">Remove
            </button>
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
