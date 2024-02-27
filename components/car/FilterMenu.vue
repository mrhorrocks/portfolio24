<template>
  <header id="filter">
    <h2>Filters</h2>
    <CarButton text="Reset" class="filter-reset" />
  </header>
  <h3>Brand</h3>
  <CarDisclosure title="Make" :isOpen="true">
    <CarCheckbox id="Abarth" label="Abarth" checked="checked" />
    <CarCheckbox id="Alpha" label="Alpha Romeo" />
    <CarCheckbox id="Audi" label="Audi" />
    <CarCheckbox id="BMW" label="BMW" />
    <CarCheckbox id="Citroën" label="Citroën" />
  </CarDisclosure>
  <CarDisclosure title="Model">Add content using a slot too.</CarDisclosure>
  <h3>Budget</h3>
  <h3>Specification</h3>
</template>

<style lang="scss">
aside.filters {
  header#filter {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 2rem 0;
    background: blanchedalmond;
    h2 {
      font-size: 1.125rem;
      padding: 0;
    }
    button.filter-reset {
      border: 0;
      color: #f87b7b;
      background-color: lighten(#f87b7b, 15%);
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
    padding: 0;
    margin: 0 0 2rem 0;
    color: #a2a9af;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
  }
}
</style>
