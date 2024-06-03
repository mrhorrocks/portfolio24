<!-- components/Model.vue -->
<template>
  <div v-if="isModalVisible" class="modal" @click="toggleModal()">
    <div v-if="isModalVisible" class="app-model-content" @click.stop>
      <button class="close-modal">
        <nuxt-icon name="modal/close_modal" filled @click="toggleModal()" />
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
//
const handleKeyDown = event => {
  if (event.key === "Escape" && isModalVisible.value) {
    toggleModal();
  }
};

onMounted(() => {
  document.addEventListener("keydown", handleKeyDown);
});

onUnmounted(() => {
  document.removeEventListener("keydown", handleKeyDown);
});
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
    padding: 0rem;
    background-color: transparent;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
    transition-duration: 1000ms;
    border-radius: 0rem;
    button.close-modal {
      position: absolute;
      z-index: 2001;
      top: 10px;
      right: 10px;
      width: 30px;
      height: 30px;
      // margin: 1rem 0.5rem;
      padding: 0;
      background-color: transparent;
      float: right;
      // color: black;
    }
  }
}
</style>
