<script setup lang="ts">
import MonitoringSwitcher from "./MonitoringSwitcher.vue";


interface Props {
  defaultMonitoringType: string;
}
const props = defineProps<Props>()


interface Emits {
  (e: 'addSpot'): void ,
  (e: 'removeSpot'): void,
  (e: 'switchMonitoring', type: string): void,
}

const emits = defineEmits<Emits>();

const monitorSwitcherHandler = (e) => {
  emits('switchMonitoring', e)
}
</script>

<template>
  <div id="control" class="d-flex flex-column justify-content-between">
    <div class="btn-group-vertical">
      <button type="button" @click="$emit('addSpot')" class="btn btn-success">Add Spot</button>
      <button type="button" @click="$emit('removeSpot')" class="btn btn-danger">Remove</button>
    </div>
    <MonitoringSwitcher :default="defaultMonitoringType" @change="monitorSwitcherHandler"/>
  </div>
</template>
