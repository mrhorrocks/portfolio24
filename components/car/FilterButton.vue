<template>
  <div class="filter-toggle">
    <slot> </slot>
  </div>
</template>

<style lang="scss">
.filter-toggle {
  position: fixed;
  bottom: 0rem;
  z-index: 100;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0.5rem 0;
  background-image: linear-gradient(transparent, white);
  @media (min-width: 1024px) {
    display: none;
  }
  .filter-toggle-button {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: relative;
    width: 130px;
    height: 50px;
    border-radius: 1rem;
    background-color: #7572ff;
    color: white;
    font-weight: normal;
    font-size: 1rem;
    background-image: url("/img/cardealer/svg/filter-icon.svg");
    background-repeat: no-repeat;
    background-position-y: center;
    background-position-x: 1.25rem;
    text-align: right;
    padding: 0.5rem 1.75rem;
  }
}
</style>
