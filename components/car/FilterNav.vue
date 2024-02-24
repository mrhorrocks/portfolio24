<template>
  <section id="controls">
    <div class="listing-header">
      <CarShowingCars class="car-showing-cars" />
      <CarTypeToggleMenu class="car-type-toggle-menu" />
      <CarPriceFilter class="car-price-filter" />
    </div>
  </section>
</template>

<style lang="scss">
#controls {
  padding-top: 0rem;
  .listing-header {
    background-color: aquamarine;
    display: flex;
    justify-content: space-between;
    @media (min-width: 1024px) {
      padding-top: 0rem;
    }
  }
}
.car-type-toggle-menu {
  display: none;
  @media (min-width: 768px) {
    display: flex;
  }
}
</style>
