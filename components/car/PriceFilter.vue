<template>
  <div class="price-filter">
    <CarSelectPriceOptions label="Lowest price" id="priceFilter" />
  </div>
</template>

<style lang="scss">
.price-filter {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  min-width: 152px;
  padding: 1rem 0;
  @media (min-width: 768px) {
    padding: 2rem 0;
  }
}
</style>
