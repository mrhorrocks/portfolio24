<template>
  <header id="cars-header">
    <div class="container-full">
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
  box-shadow: 0px 7px 5px #0000001c;
  .type-filter {
    height: 40px;
    @media (min-width: 768px) {
      display: none;
    }
  }
}
</style>
