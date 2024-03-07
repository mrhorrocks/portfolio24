<script setup>
definePageMeta({
  layout: "cardealer",
});

useHead({
  titleTemplate: "CarDealer - %s",
});
</script>

<script>
// Toggle the filter Nav
export default {
  data () {
    return {
      isAsideVisible: false,
    };
  },
  methods: {
    toggleAside () {
      this.isAsideVisible = !this.isAsideVisible;
    },
  },
};
</script>

<template>
  <CarFinanceBanner />
  <section>
    <div class="container-full">
      <div class="flexed-cols">
        <aside :class="['filters', { visable: isAsideVisible }]">
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
    <CarFilterButton>
      <CarButton
        v-if="!isAsideVisible"
        text="Filters"
        class="car-button filter-toggle-button"
        @click="toggleAside"
      />
      <CarButton
        v-if="isAsideVisible"
        text="Close"
        class="car-button filter-toggle-button"
        @click="toggleAside"
      />
    </CarFilterButton>
    <CarFooter />
  </section>
</template>

<style lang="scss">
.flexed-cols {
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
  // ASIDE.FILTERS
  // MOBILE
  aside.filters {
    display: none;
    position: fixed;
    top: 5.5rem;
    left: calc(0% - 0px);
    z-index: 99;
    width: calc(100% - 0rem);
    height: 99vh;
    padding: 1rem 0.5rem 10rem;
    background-color: white;
    box-shadow: 0px 7px 5px #0000001c;
    overflow-y: scroll;
    &.visable {
      display: block;
    }
    // IPAD PORTRAIT UP
    @media (min-width: 768px) {
      top: 3rem;
    }
    // IPAD LANDSCAPE UP
    @media (min-width: 1024px) {
      display: block; // ALWAYS SHOW AT THIS SIZE
      position: relative;
      top: 38px;
      left: 0;
      width: 21%;
      padding: 0 0 0 0.5rem;
      text-align: left;
      border-radius: 0rem;
      box-shadow: none;
      overflow-y: hidden;
    }
  }
  // ASIDE.FILTERS END
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
