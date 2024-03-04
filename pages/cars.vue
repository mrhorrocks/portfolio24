<script setup lang="ts">
definePageMeta({
  layout: "cardealer",
});
</script>

<template>
  <CarFinanceBanner />
  <section>
    <div class="container-full">
      <div class="flexed-cols">
        <aside class="filters">
          <CarFilterNav />
        </aside>

        <main class="car-dealer-main">
          <CarToggleSearchType />
          <div class="search-results">
            <CarCard />
          </div>

          <CarFinanceExampleBanner />
        </main>
      </div>
    </div>
    <CarFooter />
  </section>
</template>

<style lang="scss">
.flexed-cols {
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
  aside.filters {
    display: none;
    position: fixed;
    z-index: 2;
    width: 130px;
    left: calc(50% - 65px);
    bottom: 20px;
    border-radius: 1rem;
    @media (min-width: 1024px) {
      display: block;
      position: relative;
      top: 38px;
      left: 0;
      width: 21%;
      padding: 0 0 0 0.5rem;
      text-align: left;
      border-radius: 0rem;
    }
  }
  main {
    padding-top: 0rem;
    margin-bottom: 1rem;
    @media only screen and (min-width: 768px) {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
    @media only screen and (min-width: 1024px) {
      width: 77%;
      margin-top: 0px;
      padding-top: 0rem;
    }
    .search-results {
      display: flex;
      flex-wrap: wrap;
    }
  }
}
</style>
