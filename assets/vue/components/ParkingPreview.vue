<template>
  <div class="col">
    <div class="card shadow-sm">
      <div class="card-img card-img-top" :style="{ 'background-image' : 'url(\''+preview+'\')'}"></div>
      <div class="card-body">
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <RouterLink class="btn btn-sm btn-outline-secondary" :to="{ name: 'parking', params: {id: id } }">
              Редактировать
            </RouterLink>
            <button type="button" class="btn btn-sm btn-outline-danger">Удалить</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ParkingPreview',
  props: {
    id: {
      type: Number,
      required: true
    },
    preview: {
      type: String,
      required: true
    }
  }
}
</script>
<style scoped>

.card-button div {
  height: 25px;
}

.card-img {
  width: 100%;
  height: 250px;
  background-position: center;
  background-size: cover;
}
</style>
