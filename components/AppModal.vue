<template>
  <div class="app-model">
    <!-- Activation button -->
    <Button
      v-if="!appModel"
      @click="togglePanel"
      buttonClass="button"
      text="Open Side Panel"
    />
    <Button
      v-if="appModel"
      @click="togglePanel"
      buttonClass="button"
      text="Close Side Panel"
    />

    <!-- Modal background -->
    <div v-if="appModel" @click="closeSidePanel" class="modal-bg">
      <!-- Content -->
      <div v-if="appModel" class="app-model" @click.stop>
        <!-- Close panel -->
        <!-- <a @click.stop="togglePanel" class="close-panel">Close native</a> -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="close-panel"
          @click.stop="closeSidePanel"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="m15 9-6 6" />
          <path d="m9 9 6 6" />
        </svg>

        <!-- Add content here -->
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
const appModel = ref(false);

const togglePanel = () => {
  appModel.value = !appModel.value;
};

const closeSidePanel = () => {
  appModel.value = false;
};
</script>

<style lang="scss">
button.close-panel {
  margin-top: 0;
  float: right;
}

.close-panel {
  display: block;
  float: right;
  cursor: pointer;
  color: #888;
}

.modal-bg {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 50;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000000ab;
  backdrop-filter: blur(2px);

  .app-model {
    position: absolute;
    z-index: 101;
    width: 100vw;
    height: 50%;
    background-color: white;
    padding: 1rem;
    max-width: 28rem;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
    transition-duration: 1000ms;
    border-radius: 0.25rem;
  }
}
</style>
