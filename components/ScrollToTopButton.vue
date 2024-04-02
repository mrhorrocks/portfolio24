<template>
  <button v-if="isVisible" @click="scrollToTop" class="scrollToTop">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      viewBox="0 0 24 24"
    >
      <path
        fill="#000000"
        d="M11 16h2v-4.2l1.6 1.6L16 12l-4-4l-4 4l1.4 1.4l1.6-1.6zm1 6q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22"
      />
    </svg>
  </button>
</template>

<script>
export default {
  data () {
    return {
      isVisible: false,
    };
  },
  mounted () {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed () {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll () {
      this.isVisible = window.scrollY > 60; // Change 200 to your desired scroll position
    },
    scrollToTop () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/partials/colours";
button.scrollToTop {
  // background-color: $theme-colour-three;
  background-color: white;
  padding: 0;
  position: fixed;
  width: 50px;
  height: 50px;
  bottom: 5rem;
  right: 2rem;
  border-radius: 50%;
  border: 0;
  z-index: 999;
}
</style>
