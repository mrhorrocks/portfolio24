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

<template>
  <button class="button">
    <slot>{{ text }}</slot>
  </button>
</template>

<style lang="scss">
button {
  border: 0;
}
</style>
