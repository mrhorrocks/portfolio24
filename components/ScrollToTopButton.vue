<template>
  <button v-if="isVisible" @click="scrollToTop" class="scroll-to-top">
    <span>
      <svg
        width="50"
        height="50"
        version="1.1"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m10.8 16.8h2.4v-5.04l1.92 1.92 1.68-1.68-4.8-4.8-4.8 4.8 1.68 1.68 1.92-1.92zm1.2 7.2q-2.49 0-4.68-0.9456-2.19-0.9456-3.81-2.5644-1.62-1.62-2.5644-3.81-0.9444-2.19-0.9456-4.68 0-2.49 0.9456-4.68 0.9456-2.19 2.5644-3.81 1.62-1.62 3.81-2.5644 2.19-0.9444 4.68-0.9456 2.49 0 4.68 0.9456 2.19 0.9456 3.81 2.5644 1.62 1.62 2.5656 3.81 0.9456 2.19 0.9444 4.68 0 2.49-0.9456 4.68-0.9456 2.19-2.5644 3.81-1.62 1.62-3.81 2.5656-2.19 0.9456-4.68 0.9444"
          stroke-width="1.2"
        />
      </svg>
    </span>
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
      this.isVisible = window.scrollY > 60; // Change # to your desired scroll position
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
button.scroll-to-top {
  position: fixed;
  bottom: 5rem;
  right: 2rem;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  cursor: pointer;
  span {
    display: block;
    width: 50px;
    height: 50px;
  }
  &:hover {
    background-color: #b6b600;
  }
}
</style>
