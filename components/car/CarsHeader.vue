<script lang="ts" setup></script>

<template>
  <header id="cars-header">
    <div class="container header-elements">
      <CarNavMenu />
    </div>
  </header>
</template>

<style lang="scss" scoped>
#cars-header {
  position: fixed;
  z-index: 100;
  width: 100%;
  // height: 90px;
  margin: 0 auto;
  background-color: bisque;
  box-shadow: 0px 7px 5px #0000001c;
  box-sizing: border-box;
  .header-elements {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }
}
</style>
