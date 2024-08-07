<script>
export default {
  data () {
    return {
      // Mobile menu is hidden by default
      isHeaderShrink: false,
    };
  },
  methods: {
    handleScroll () {
      // Adjust the scroll position threshold as needed
      this.isHeaderShrink = window.scrollY > 60;
    },
  },
  mounted () {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy () {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<template>
  <header
    id="header"
    :class="[
      $route.fullPath === '/' ? 'red' : 'blue',
      { shrink: isHeaderShrink },
    ]"
  >
    <div class="container">
      <TheNavigation />
    </div>
  </header>
</template>

<style lang="scss">
#header {
  position: fixed;
  max-height: 80px;
  top: 0;
  z-index: 100;
  width: 100%;
  background-color: white;
  box-shadow: inset 0px -7px 0px #00000075;
  transition: 0.3s ease;
  &.shrink {
    background-color: lightblue;
    max-height: 44px;
  }
}
</style>
