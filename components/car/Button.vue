<script setup>
defineProps({
  text: {
    type: String,
    required: false,
    default: "Add text prop",
  },
});
</script>

<template>
  <button>
    <slot>{{ text }}</slot>
  </button>
</template>

<style lang="scss">
.car-button {
  background: #82f7ff;
  border: 0;
  border-radius: 0.7rem;
  padding: 0.5rem 1.5rem;
  margin: 0.2rem 0 0.2rem 0.2rem;
  font-weight: bold;
  font-family: "Roboto";
  cursor: pointer;
  &:hover {
    background: darken(#82f7ff, 20%);
  }
}
</style>
