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
      <button
        @click="toggleMobileMenu"
        class="hamburger"
        aria-label="toggle Navigation"
      >
        <span v-if="mobileMenuOpen">
          <!-- Close -->
          <svg
            width="32"
            height="32"
            version="1.1"
            viewBox="0 -960 960 960"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              transform="matrix(.70711 .70711 .70711 -.70711 0 0)"
              x="-436.76"
              y="629.28"
              width="882"
              height="150"
              stroke-width="0"
            />
            <rect
              transform="matrix(.70711 -.70711 -.70711 -.70711 0 0)"
              x="263.28"
              y="-79.243"
              width="882"
              height="150"
              stroke-width="0"
            />
          </svg>
        </span>
        <span v-if="!mobileMenuOpen">
          <svg
            width="32"
            height="32"
            version="1.1"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g stroke-width="0">
              <rect x=".975" y="3" width="22.05" height="3.75" />
              <rect x=".975" y="16.5" width="22.05" height="3.75" />
              <rect
                x=".975"
                y="9.75"
                width="22.05"
                height="3.75"
                fill="#7f7f7f"
              />
            </g>
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
        <ul>
          <li><NuxtLink to="/" title="Home">Home</NuxtLink></li>
          <li><NuxtLink to="/blog" title="Blog">Blog</NuxtLink></li>
          <li><NuxtLink to="/about" title="About">About</NuxtLink></li>
          <li><NuxtLink to="/tools" title="Tools">Tools</NuxtLink></li>
        </ul>
      </div>
    </div>

    <!-- MOBILE MENU -->
    <!-- Show below 1024px -->
    <div v-if="mobileMenuOpen" class="mobilenavlinks">
      <ul>
        <li>
          <NuxtLink to="/" title="Home">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/blog" title="Blog">Blog</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about" title="About">About</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/tools" title="Tools">Tools</NuxtLink>
        </li>
      </ul>
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
  }
}
div.navlinks {
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
  ul {
    display: flex;
  }
  a {
    position: relative;
    display: block;
    float: left;
    padding: 2rem 1rem;
    overflow: hidden;
    font-weight: bold;
    font-size: 0.85rem;
    text-decoration: none;
    text-transform: uppercase;
    font-family: Roboto;
    // text-transform: uppercase;
    color: black;
    text-rendering: optimizelegibility;
    -webkit-font-smoothing: antialiased;
    transition: padding 0.3s ease;
    //  ROLE OUT
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: -1px;
      width: 100%;
      height: 0.5em;
      background-color: $theme-colour-three;
      transition: opacity 300ms, transform 300ms;
      transform: translate3d(-100%, 0, 0);
      opacity: 1;
    }
    // ROLE IN
    &:hover::after {
      transform: translate3d(0, 0, 0);
      background-color: lighten($theme-colour-three, 10%);
    }
    // ACTIVE PAGE
    &.router-link-active::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 100%;
      width: 100%;
      height: 0.5em;
      //
      background-color: $theme-colour-three;
      opacity: 1;
      transform: translate3d(-100%, 0, 0);
    }
  }
  &.shrink a {
    padding: 0.75rem 1rem 1rem;
  }
}

// MOBILE
// Hamburger
button.hamburger {
  display: block;
  height: 48px;
  background-color: transparent;
  border: 0;
  @media (min-width: 768px) {
    display: none;
  }
}
div.mobilenavlinks {
  display: flex;
  flex-direction: column;
  padding-bottom: 8px;
  @media (min-width: 768px) {
    display: none;
  }
  ul {
    li {
      a {
        display: flex;
        justify-content: center;
        padding: 1rem 0.5rem;
        text-align: center;
        text-decoration: none;
        color: black;
        border-top: 1px solid black;
        &:hover {
          background-color: #e6e6e6;
        }
      }
    }
  }
}
</style>
