<script setup>
useHead({
  titleTemplate: "Tools - %s",
});
const {
  data: toolsData,
  pending,
  error,
} = await useFetch("https://mrhorrocks.github.io/data/mhox/mhox-tools.json");
</script>

<template>
  <section>
    <div class="container">
      <div v-if="pending">Fetching...</div>
      <div v-else-if="error">{{ error }}</div>
      <h1>Tools</h1>
      <div class="grid lg:cols-3 lg:gap-2">
        <div class="col-span-2">
          <h2>Current Stack</h2>

          <div class="tool-group">
            <NuxtLink
              v-for="item in toolsData.current"
              :key="item.id"
              :href="item.url"
              :title="item.name"
              external
              class="chip"
            >
              {{ item.name }}
            </NuxtLink>
          </div>

          <h2>Previous Stack</h2>
          <div class="tool-group">
            <NuxtLink
              v-for="item in toolsData.previous"
              :key="item.id"
              :href="item.url"
              :title="item.name"
              external
              class="chip"
            >
              {{ item.name }}
            </NuxtLink>
          </div>
        </div>

        <div class="col-span-1">
          <h2>Resources</h2>
          <div class="tool-group">
            <NuxtLink
              v-for="item in toolsData.resources"
              :key="item.id"
              :href="item.url"
              :title="item.name"
              external
              class="chip"
            >
              {{ item.name }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.tool-group {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  a {
    &.chip {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 50px;
      width: calc(33.3% - 0.5rem);
      margin: 0 0.5rem 0.5rem 0;
      background-color: #858585;
      font-size: 0.9rem;
      padding: 0.25rem 0.5rem;
      color: #fff;
      border: 0.15rem solid white;
      border-radius: 5px;
      box-shadow: 0px 3px 3px #ccc;
      text-align: center;
      text-decoration: underline;
      text-decoration-style: dotted;
      transition: 0.5s;
      @media (min-width: 640px) {
        width: 110px;
      }
      &:hover {
        top: 1px;
        background-color: gold;
        color: #000;
        text-decoration: none;
        box-shadow: 0px 1px 3px #ccc;
      }
      &:active {
        background-color: #00c500;
        color: #fff;
      }
    }
  }
}
</style>
