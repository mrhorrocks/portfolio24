<template>
  <header id="filter">
    <div>
      <h2>Filters</h2>
    </div>
    <div>
      <CarButton text="Cancel" class="car-button filter-cancel" />
      <CarButton text="Reset" class="car-button filter-reset" />
    </div>
  </header>

  <h3>Brand</h3>
  <CarDetail title="Make">
    <CarCheckbox
      v-for="item in makes.data"
      :key="item.id"
      :id="item.name"
      :label="item.name"
    />
  </CarDetail>
  <CarDetail title="Model"> Models go here... </CarDetail>

  <h3>Budget</h3>
  <CarDetail title="Min. Price"> Min price </CarDetail>
  <CarDetail title="Max. Price"> Max price </CarDetail>

  <h3>Specification</h3>
  <CarDetail title="Fuel type">Fuel type</CarDetail>
  <CarDetail title="Body type">Body type</CarDetail>
  <CarDetail title="Transmission">Transmission</CarDetail>
  <CarDetail title="Engine size">Engine size</CarDetail>
  <CarDetail title="Milage">Milage</CarDetail>
  <CarDetail title="Colour">Colour</CarDetail>
  <CarDetail title="Doors">Doors</CarDetail>
  <CarDetail title="Seats">Seats</CarDetail>
  <CarDetail title="Fearures">Fearures</CarDetail>
</template>

<style lang="scss">
aside.filters {
  header#filter {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 1rem 0;
    background: white;
    h2 {
      font-size: 1.125rem;
      padding: 0;
    }
    button {
      border: 0;
      border-radius: 0.76rem;
      padding: 0 1rem;
      height: 2rem;
      &.filter-reset {
        color: #f87b7b;
        background-color: lighten(#f87b7b, 22%);
        &:hover {
          background-color: lighten(#f87b7b, 12%);
          color: white;
        }
      }
      &.filter-cancel {
        color: black;
        background-color: #e0e2ed;
        margin-right: 0.5rem;
        &:hover {
          background-color: darken(#e0e2ed, 5%);
          color: black;
        }
        @media (min-width: 1024px) {
          display: none;
        }
      }
    }
  }
  h3 {
    font-size: 0.75rem;
    color: #a2a9af;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    border-bottom: 1px solid #f4f4f4;
  }
}
</style>

<script>
import makes from "~/assets/data/makes.json";
export default {
  data () {
    return {
      makes,
    };
  },
};
</script>
