<script lang="ts" setup></script>

<template>
  <header id="cars-header">
    <div class="container header-elements">
      <CarNavMenu />
      <CarTypeToggleMenu class="type-filter" />
    </div>
  </header>
</template>

<style lang="scss" scoped>
#cars-header {
  position: fixed;
  z-index: 100;
  width: 100%;
  margin: 0 auto;
  background-color: bisque;
  box-shadow: 0px 7px 5px #0000001c;
  box-sizing: border-box;
  .type-filter {
    background-color: red;
    @media (min-width: 768px) {
      display: none;
    }
  }
}
</style>
