<template>
  <header id="cars-header">
    <div class="container header-elements">
      <CarNavMenu />
      <CarTypeToggleMenu class="type-filter" />
    </div>
  </header>
</template>

<style lang="scss">
#cars-header {
  position: fixed;
  z-index: 100;
  width: 100%;
  margin: 0 auto;
  background-color: white;
  // box-sizing: border-box;
  box-shadow: 0px 7px 5px #0000001c;
  border-bottom: 1px solid #ccc;
  .type-filter {
    background-color: red;
    height: 40px;
    @media (min-width: 768px) {
      display: none;
    }
  }
}
</style>
