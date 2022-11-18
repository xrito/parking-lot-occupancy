<template>
  <div class="container">
    <div id="camera" style="width: 640px;height: 360px">
      <img src='http://127.0.0.1:8090/live.mjpg' width="640" height="360">
      <canvas id="spot-overlay" width="640" height="360"></canvas>
    </div>
    <div id="control">
      <button>
        Добавить место
      </button> 
      <button>
        Удалить
      </button>
      <label><input type="radio" name="show"
                    value="prediction">Предсказание</label>
      <label><input type="radio" name="show" value="spot" checked>Места</label>
    </div>
  </div>
</template>
