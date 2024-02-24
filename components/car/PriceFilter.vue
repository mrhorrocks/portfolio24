<template>
  <div class="price-filter">
    <CarSelectOptions label="Lowest price" id="priceFilter" />
  </div>
</template>

<style lang="scss">
.price-filter {
  display: flex;
  align-items: center;
  width: 140px;
  padding: 1rem 0;
  @media (min-width: 768px) {
    width: 180px;
  }
}
</style>
