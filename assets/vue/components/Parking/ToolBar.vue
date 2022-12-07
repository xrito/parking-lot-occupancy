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

const buttons = [
  {
    label: 'Add spot',
    icon: 'file-plus',
    type: 'success',
    handler: () => emits('addSpot')
  },
  {
    label: 'Remove',
    icon: 'file-minus',
    type: 'danger',
    handler: () => emits('removeSpot')
  },
  {
    label: 'Clear',
    icon: 'trash',
    type: 'danger',
    handler: () => emits('clear')
  }
]
</script>

<template>
  <div id="control" class="d-flex flex-column justify-content-between">
    <MonitoringSwitcher :default="defaultMonitoringType" @change="monitorSwitcherHandler"/>
    <div class="btn-group-vertical">
        <button
            v-if="type === 'spot'"
            v-for="button in buttons"
            type="button"
            :class="['btn','text-start', 'btn-outline-' + button.type]"
            @click="button.handler">
          <i class="bi pe-none" :class="'bi pe-none bi-' + button.icon"></i>
          {{ button.label }}
        </button>
    </div>
  </div>
</template>

<style scoped>
#control {
  width: 130px;
}
</style>
