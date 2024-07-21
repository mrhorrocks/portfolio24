<script setup>
// STORE
import { useModalStore } from "@/stores/modalStore";
const modalStore = useModalStore();
const toggleModal = () => {
  modalStore.toggleModal();
};
// STORE
defineProps({
  buttontext: {
    type: String,
    default: "Modal button text",
  },
});
</script>

<template>
  <!-- <Button @click.stop.prevent="toggleModal" class="modal-button"> -->
  <Button class="modal-button">
    {{ buttontext }}
  </Button>
</template>

<style lang="scss">
@import "@/assets/scss/partials/colours";

.modal-button {
  font-family: "RobotoCondensed-Regular", Arial, Helvetica, sans-serif;
  background-color: #000;
  box-shadow: 0px 3px 3px #737373;
  border-radius: 0.25rem;
  transition: 0.2s;
  &:hover {
    background-color: #b6b600;
    color: black;
    box-shadow: 2px 2px 2px #737373;
    cursor: pointer;
  }
}
</style>
