<template>
  <div class="price-filter">
    <CarSelectOptions label="Lowest price" id="priceFilter" />
  </div>
</template>

<style lang="scss">
.price-filter {
  display: flex;
  align-items: center;
  min-width: 152px;
  padding: 1rem 0;
  @media (min-width: 768px) {
    padding: 2rem 0;
  }
}
</style>
