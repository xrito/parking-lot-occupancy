<script setup lang="ts">
import {ref} from "vue";
import type ParkingForm from "../../../src/Model/ParkingForm";

const form = ref({
  stream: "",
} as ParkingForm);

const closeButton = ref<HTMLButtonElement>();
const formElement = ref<HTMLFormElement>();
interface Props {
  id: string;
}

interface Emits {
  (e: 'addParking', form: ParkingForm, closeModal: () => void): void
}

const closeModal = function () {
  closeButton.value?.click();
  formElement.value?.reset();
}
defineProps<Props>();
defineEmits<Emits>();
</script>

<template>
  <div class="modal fade" :id="id" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <form @submit.prevent="$emit('addParking', form, closeModal)" ref="formElement" method="post">
          <div class="modal-header">
            <h1 class="modal-title fs-5">Stream\Video Url</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" ref="closeButton"
                    aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <input v-model="form.stream" name="stream" type="url" class="form-control"
                   placeholder="http://192.168.0.1/stream2">
          </div>
          <div class="modal-footer">
            <button type="submit" class="btn btn-primary">Continue</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
