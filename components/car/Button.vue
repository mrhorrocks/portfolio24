<template>
  <button>
    <slot>{{ text }}</slot>
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: false,
      default: "Add text prop",
    },
  },
};
</script>

<style lang="scss">
.car-button {
  background: #82f7ff;
  border: 0;
  border-radius: 0.7rem;
  padding: 0.5rem 1.5rem;
  margin: 0.2rem;
  font-weight: bold;
  font-family: "Roboto";
  &:hover {
    background: darken(#82f7ff, 20%);
  }
}
.call-to-action {
}
</style>
