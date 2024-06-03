<!-- components/Model.vue -->
<template>
  <div v-if="isModalVisible" class="modal" @click="toggleModal()">
    <div v-if="isModalVisible" class="app-model-content" @click.stop>
      <button class="close-modal">
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="#b6b600"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="close-modal"
          version="1.1"
          id="svg1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:svg="http://www.w3.org/2000/svg"
        >
          <defs id="defs1" />
          <ellipse
            style="
              fill: #3cffff;
              fill-opacity: 1;
              stroke: #f50000;
              stroke-width: 1.65803;
              stroke-linejoin: round;
              stroke-dasharray: none;
              stroke-opacity: 1;
              paint-order: normal;
            "
            id="path1"
            cx="12"
            cy="-11.999999"
            rx="11.170987"
            ry="11.170986"
            transform="scale(1,-1)"
          />
          <rect
            style="
              fill: #000000;
              fill-opacity: 1;
              stroke: #f50000;
              stroke-width: 0;
              stroke-linejoin: round;
              stroke-dasharray: none;
              stroke-opacity: 1;
              paint-order: normal;
            "
            id="rect1"
            width="1.5999994"
            height="15.999999"
            x="16.179976"
            y="-8.0847235"
            transform="matrix(0.70710678,0.70710678,0.70710678,-0.70710678,0,0)"
          />
          <rect
            style="
              fill: #000000;
              fill-opacity: 1;
              stroke: #f50000;
              stroke-width: 0;
              stroke-linejoin: round;
              stroke-dasharray: none;
              stroke-opacity: 1;
              paint-order: normal;
            "
            id="rect1-0"
            width="1.5999994"
            height="15.999999"
            x="-0.88472378"
            y="-24.979975"
            transform="matrix(0.70710678,-0.70710678,-0.70710678,-0.70710678,0,0)"
          />
        </svg>
      </button>

      <VideoPlayer src="/img/homepage/mgwb_480.mp4" width="738" />
    </div>
  </div>
</template>

<script setup>
import { useModalStore } from "@/stores/modalStore";

const modalStore = useModalStore();
const isModalVisible = computed(() => modalStore.isModalVisible);

const toggleModal = () => {
  modalStore.toggleModal();
};
</script>

<style lang="scss">
// @import "@/assets/scss/partials/colours";
.modal {
  /* modal styles */
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  background-color: #000000ab;
  backdrop-filter: blur(2px);
  .app-model-content {
    position: absolute;
    z-index: 2001;
    max-width: 738px;
    width: calc(90% - 1rem);
    aspect-ratio: 16 / 8;
    background-color: transparent;
    padding: 0rem;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
    transition-duration: 1000ms;
    border-radius: 0rem;
    button.close-modal {
      width: 30px;
      height: 30px;
      margin: 1rem 0.5rem;
      padding: 0;
      background-color: transparent;
      float: right;
      color: black;
    }
  }
}
</style>
