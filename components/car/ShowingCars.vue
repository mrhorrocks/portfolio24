<template>
  <div class="showing-cars">
    <span>Showing 24 of</span>&nbsp;<span>339 cars</span>
  </div>
</template>

<style lang="scss">
.showing-cars {
  display: flex;
  align-items: center;
  min-width: 160px;
  padding: 1rem 0;
  @media (min-width: 768px) {
    font-weight: bold;
    font-size: 0.9rem;
    padding: 2rem 0;
  }
}
</style>
