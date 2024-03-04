<template>
  <header id="filter">
    <h2>Filters</h2>
    <CarButton text="Reset" class="filter-reset" />
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

  <h3>Specification</h3>
</template>

<style lang="scss">
aside.filters {
  font-family: "RobotoCondensed-Regular", Arial, Helvetica, sans-serif;
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
    button.filter-reset {
      border: 0;
      color: #f87b7b;
      background-color: lighten(#f87b7b, 22%);
      border-radius: 0.76rem;
      padding: 0 1rem;
      height: 2rem;
      &:hover {
        background-color: lighten(#f87b7b, 5%);
        color: white;
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
