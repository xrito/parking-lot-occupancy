<script setup lang="ts">
import {onMounted, ref} from "vue";
import type ParkingForm from "../../../src/Model/ParkingForm";
import type FormError from "../../../src/Form/FormError";

const form = ref({
  name: '',
  stream: "",
} as ParkingForm);

const closeButton = ref<HTMLButtonElement>();
const formElement = ref<HTMLFormElement>();

interface Props {
  id: string;
  errors: FormError[];
}

interface Emits {
  (e: 'addParking', form: ParkingForm, closeModal: () => void): void
}

const closeModal = function () {
  closeButton.value?.click();
  formElement.value?.reset();
}
const props = defineProps<Props>();
defineEmits<Emits>();

const formFields = [
  {
    id: props.id + '-name',
    label: 'Name',
    name: 'name',
    placeholder: 'Parking name',
    type: 'text',
  },
  {
    id: props.id + '-stream',
    label: 'Stream\\Video Url',
    name: 'stream',
    placeholder: 'rtsp://stream.test/stream',
    type: 'url',
  }
]
</script>

<template>
  <div class="modal fade" :id="id" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <form @submit.prevent="$emit('addParking', form, closeModal)" ref="formElement" method="post">
          <div class="modal-header">
            <h1 class="modal-title fs-5">Add Parking</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" ref="closeButton"
                    aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div v-for="formField in formFields" class="mb-3">
              <label :for="formField.id" class="form-label">{{ formField.label }}</label>
              <input v-model="form[formField.name]" :name="formField.name" :type="formField.type" class="form-control"
                     :id="formField.id" required
                     :placeholder="formField.placeholder">
            </div>
            <div v-if="errors.length > 0" class="alert alert-danger mt-3">
              <ul>
                <li v-for="error in errors" :key="error.propertyPath">{{ error.message }}</li>
              </ul>
            </div>
          </div>
          <div class="modal-footer">
            <button type="submit" class="btn btn-primary">Continue</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
