<template>
  <div class="sidePanel">
    <!-- Activation button -->
    <CarButton
      v-if="!sidePanel"
      @click="togglePanel"
      @="toggleClass"
      buttonClass="button"
      text="Open Side Panel"
    />
    <CarButton
      v-if="sidePanel"
      @click="togglePanel"
      @="toggleClass"
      buttonClass="button"
      text="Close Side Panel"
    />

    <!-- Modal background -->
    <div
      v-if="sidePanel"
      @click="closeSidePanel"
      :class="{ 'your-class-name': isClassActive }"
    ></div>

    <!-- Content -->
    <div v-if="sidePanel" class="side-panel">
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
        class="lucide lucide-x-circle close-panel"
        @click.stop="closeSidePanel"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="m15 9-6 6" />
        <path d="m9 9 6 6" />
      </svg>

      <!-- Add content here -->
      <slot> </slot>
    </div>
  </div>
</template>

<script>
export default {
  setup () {
    const isClassActive = ref(false);

    const toggleClass = () => {
      isClassActive.value = !isClassActive.value;
    };

    return {
      isClassActive,
      toggleClass,
    };
  },
  data () {
    return {
      sidePanel: true,
    };
  },
  methods: {
    togglePanel () {
      this.sidePanel = !this.sidePanel;
    },
    closeSidePanel () {
      this.sidePanel = false;
    },
  },
};
</script>

<style scoped>
.button {
  float: left;
}
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
  display: none;
  z-index: 50;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #e5e7eb;
  opacity: 50%;
}

.side-panel {
  /* position: fixed; */
  z-index: 51;
  top: 0rem;
  right: 0;
  height: 100%;
  /* width: 100%; */
  background-color: white;
  /* padding: 1rem; */
  transition: 1s;
  /* overflow-y: scroll; */
}
</style>
