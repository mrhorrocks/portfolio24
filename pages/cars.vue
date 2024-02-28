<script setup lang="ts">
definePageMeta({
  layout: "cardealer",
});
</script>

<template>
  <CarFinanceBanner />
  <section>
    <div class="container">
      <div class="flexed-cols">
        <!-- FILTERS -->
        <aside class="filters">
          <CarFilterMenu />
        </aside>
        <!-- MAIN CONTENT -->
        <main class="car-dealer">
          <CarFilterNav />
          <div class="search-results">
            <CarCard />
          </div>
        </main>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.flexed-cols {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  background-color: #ffffff;
  aside.filters {
    position: fixed;
    z-index: 2;
    width: 130px;
    left: calc(50% - 65px);
    bottom: 20px;
    background-color: #f4f4f4;
    padding: 0.6rem 1rem;
    box-sizing: border-box;
    border-radius: 1rem;
  }
  main {
    width: 100%;
    padding-top: 0rem;
    margin-bottom: 80px;
    .search-results {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
}
@media only screen and (min-width: 768px) {
  .flexed-cols {
    main {
      width: 100%;
      margin-top: 0px;
      margin-bottom: 0px;
      padding-top: 0rem;
    }
  }
}
@media only screen and (min-width: 1024px) {
  .flexed-cols {
    aside.filters {
      position: relative;
      top: 0;
      left: 0;
      width: 25%;
      text-align: left;
      border-radius: 0rem;
    }
    main {
      width: calc(75% - 2%);
      margin-top: 0px;
      margin-bottom: 0px;
      padding-top: 0rem;
    }
  }
}
@media only screen and (min-width: 1440px) {
  .flexed-cols {
    max-width: 1440px;
  }
}
</style>
