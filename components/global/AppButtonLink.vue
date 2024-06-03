<script setup>
// Define props
defineProps({
  title: {
    type: String,
    default: "Default Title",
  },
  text: {
    type: String,
    default: "Button link text",
  },
  url: {
    type: String,
    default: "/",
  },
});
</script>

<template>
  <NuxtLink :to="url" class="app-button">&lt;&lt; {{ text }} &gt;&gt;</NuxtLink>
</template>

<style lang="scss">
@import "@/assets/scss/partials/colours";

.app-button {
  display: inline-block;
  padding: 0.5rem;
  font-size: 0.8rem;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  color: white;
  background-color: #000;
  box-shadow: 0px 3px 3px #737373;
  transition: 0.2s;
  &:hover {
    background-color: #b6b600;
    color: black;
    box-shadow: 2px 2px 2px #737373;
  }
}
</style>
