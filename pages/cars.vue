<script setup lang="ts">
definePageMeta({
  layout: "cardealer",
});
</script>

<template>
  <section>
    <div class="flexed-cols">
      <!-- FILTERS -->
      <aside class="filters">Filters</aside>
      <!-- MAIN CONTENT -->
      <main class="car-dealer">
        <div class="search-results">
          <cardealerCarCard />
        </div>
      </main>
    </div>
  </section>
</template>

<style lang="scss">
.flexed-cols {
  font-family: "Roboto", Arial, Helvetica, sans-serif;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: flex-start;
  grid-gap: 20px;
  gap: 20px;
  max-width: 1440px;
  margin: 0 auto;
  background-color: #ffffff;
  transition: 0.25s;
  aside.filters {
    position: fixed;
    left: 33%;
    bottom: 20px;
    z-index: 1;
    width: 33%;
    height: 50px;
    background-color: #db006e;
    color: white;
    text-align: center;
    box-shadow: 0px 7px 5px #0000001c;
    padding: 1rem;
    box-sizing: border-box;
    border-radius: 1rem;
  }

  main {
    width: 100%;
    margin-top: 95px;
    margin-bottom: 80px;
    .search-results {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
}

// @media only screen and (min-width: 375px) {
//   .flexed-cols {
//     max-width: 375px;
//     background-color: red;
//   }
// }

@media only screen and (min-width: 768px) {
  .flexed-cols {
    max-width: 768px;
    main {
      width: 100%;
      margin-top: 0px;
      margin-bottom: 0px;
    }
  }
}

@media only screen and (min-width: 1024px) {
  .flexed-cols {
    max-width: 1024px;
    aside.filters {
      position: relative;
      top: 105px;
      left: 0;
      width: calc(25% - 15px);
      text-align: left;
      margin-top: 12px;
      border-radius: 0rem;
    }
    main {
      width: calc(75% - 5px);
      margin-top: 0px;
      margin-bottom: 0px;
    }
  }
}

@media only screen and (min-width: 1440px) {
  .flexed-cols {
    max-width: 1440px;
  }
}
</style>
