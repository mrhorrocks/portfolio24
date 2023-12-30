<script>
export default {
  data () {
    return {
      // Mobile menu is hidden by default
      mobileMenuOpen: false,
      isNavShrink: false,
    };
  },
  methods: {
    // Toggle the mobile menu
    toggleMobileMenu () {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    },
    handleScroll () {
      // Adjust the scroll position threshold as needed
      this.isNavShrink = window.scrollY > 60;
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
  <nav id="nav">
    <div class="nav-content">
      <SiteLogo />
      <button @click="toggleMobileMenu" class="hamburger">
        <span v-if="mobileMenuOpen">
          <!-- Close -->
          <svg
            width="32"
            height="32"
            version="1.1"
            viewBox="0 -960 960 960"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224z"
            />
          </svg>
        </span>
        <span v-if="!mobileMenuOpen">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
            />
          </svg>
        </span>
      </button>

      <!-- DESKTOP MENU -->
      <!-- Hide below 1024px -->
      <div
        class="navlinks"
        :class="[
          $route.fullPath === '/' ? 'red' : 'blue',
          { shrink: isNavShrink },
        ]"
      >
        <NuxtLink to="/" title="Home">Home</NuxtLink>
        <NuxtLink to="/experience" title="Experience">Experience</NuxtLink>
        <NuxtLink to="/blog" title="Blog">Blog</NuxtLink>
        <NuxtLink to="/about" title="About">About</NuxtLink>
        <NuxtLink to="/contact" title="Contact">Contact</NuxtLink>
      </div>
    </div>

    <!-- MOBILE MENU -->
    <!-- Show below 1024px -->
    <div v-if="mobileMenuOpen" class="mobilenavlinks">
      <NuxtLink to="/" title="Home">Home</NuxtLink>
      <NuxtLink to="/experience" title="Experience">Experience</NuxtLink>
      <NuxtLink to="/blog" title="Blog">Blog</NuxtLink>
      <NuxtLink to="/about" title="About">About</NuxtLink>
      <NuxtLink to="/contact" title="Contact">Contact</NuxtLink>
    </div>
  </nav>
</template>

<style lang="scss">
@import "@/assets/scss/partials/colours";

nav#nav {
  div.nav-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: lighten($theme-colour, 20%);
  }
}
div.navlinks {
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
  a {
    position: relative;
    background-color: white;
    display: block;
    float: left;
    padding: 2rem 1rem;
    overflow: hidden;
    transition: padding 0.3s ease;
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 0.3em;
      background-color: hotpink;
      transition: opacity 300ms, transform 300ms;
      opacity: 1;
      transform: translate3d(-100%, 0, 0);
    }
    &:hover::after,
    &:focus::after {
      transform: translate3d(0, 0, 0);
    }
  }
  &.shrink a {
    padding: 0.5rem 1rem;
  }
}
// MOBILE
// Hamburger
button.hamburger {
  display: block;
  height: 51px;
  @media (min-width: 768px) {
    display: none;
  }
}
div.mobilenavlinks {
  display: flex;
  flex-direction: column;
  background-color: $theme-colour;
  @media (min-width: 768px) {
    display: none;
  }
  a {
    background-color: pink;
    padding: 1rem 0.5rem;
  }
}
</style>
