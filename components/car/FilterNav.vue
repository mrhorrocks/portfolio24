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
  padding: 0 0.25rem;
  @media (min-width: 768px) {
    width: 99%;
    padding: 0rem 0.5rem 0 0;
  }
  @media (min-width: 1440px) {
    width: 98%;
  }
  .listing-header {
    display: flex;
    justify-content: space-between;
    @media (min-width: 1024px) {
      padding-top: 0rem;
    }
  }
}
.car-type-toggle-menu {
  display: none;
  li {
    min-width: 100px;
  }
  @media (min-width: 768px) {
    display: flex;
  }
}
</style>
