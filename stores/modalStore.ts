import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', {
  state: () => ({
    isModalVisible: false,
  }),
  actions: {
    toggleModal() {
      this.isModalVisible = !this.isModalVisible;
    },
    showModal() {
      this.isModalVisible = true;
    },
    hideModal() {
      this.isModalVisible = false;
    },
  },
});
