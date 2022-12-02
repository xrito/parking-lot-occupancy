<script setup lang="ts">
import MonitoringSwitcher from "./MonitoringSwitcher.vue";
import {ref} from "vue";


interface Props {
  defaultMonitoringType: string;
}

const props = defineProps<Props>()
const type = ref(props.defaultMonitoringType)

interface Emits {
  (e: 'addSpot'): void,

  (e: 'removeSpot'): void,

  (e: 'clear'): void,

  (e: 'switchMonitoring', type: string): void,
}

const emits = defineEmits<Emits>();

const monitorSwitcherHandler = (e) => {
  type.value = e;
  emits('switchMonitoring', e)
}
</script>

<template>
  <div id="control" class="d-flex flex-column justify-content-between">
    <div class="btn-group-vertical">
      <slot v-if="type === 'spot'">
        <button type="button" @click="$emit('addSpot')" class="btn text-start btn-outline-success">
          <i class="bi pe-none bi-file-plus"/> Add Spot
        </button>
        <button type="button" @click="$emit('removeSpot')" class="btn text-start btn-outline-danger"><i
            class="bi pe-none bi-file-minus"/>Remove
        </button>
        <button type="button" @click="$emit('clear')" class="btn text-start btn-outline-danger"><i
            class="bi pe-none bi-trash"/>Clear</button>
      </slot>
    </div>
    <MonitoringSwitcher :default="defaultMonitoringType" @change="monitorSwitcherHandler"/>
  </div>
</template>

<style scoped>
  #control {
    width: 130px;
  }
</style>
