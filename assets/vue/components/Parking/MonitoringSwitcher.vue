<script setup lang="ts">
import {ref} from "vue";

const buttons = [
  {label: "Prediction", value: "prediction"},
  {label: "Spots", value: "spot"},
];

interface Props {
  default: string;
}

const props = defineProps<Props>()

const type = ref<string>();
type.value = props.default;

interface Emits {
  (e: 'change', type: string): void,
}

defineEmits<Emits>();
</script>

<template>
  <div class="btn-group-vertical" role="group">
    <slot v-for="button in buttons">
      <input type="radio"
             class="btn-check"
             name="show"
             :value="button.value"
             @input="$emit('change', $event.target.value)"
             v-model="type"
             :id="'monitoring-'+button.value"
             autocomplete="off">
      <label class="btn btn-outline-primary" :for="'monitoring-'+button.value">{{ button.label }}</label>
    </slot>
  </div>
</template>

