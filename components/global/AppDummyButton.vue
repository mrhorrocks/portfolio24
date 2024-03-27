<script setup>
// Define props
const props = defineProps({
  text: {
    type: String,
    default: "Button text",
  },
});
</script>

<template>
  <button class="app-dummy-button">&lt;&lt; {{ text }} >></button>
</template>

<style lang="scss">
@import "@/assets/scss/partials/colours";

.app-dummy-button {
  display: inline-block;
  padding: 0.5rem;
  font-size: 0.8rem;
  font-family: RobotoCondensed-Regular;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  color: white;
  background-color: #000;
  box-shadow: 0px 3px 3px #737373;
  transition: 0.2s;
  border: 0;
  cursor: pointer;
  &:hover {
    background-color: #b6b600;
    color: black;
    box-shadow: 2px 2px 2px #737373;
    font-weight: bold;
  }
}
</style>
