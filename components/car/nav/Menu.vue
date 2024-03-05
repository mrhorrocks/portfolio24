<script>
// import { ref, onMounted, onBeforeUnmount } from "vue";
export default {
  setup () {
    const mobileMenuOpen = ref(false);
    const isNavShrink = ref(false);

    const toggleMobileMenu = () => {
      mobileMenuOpen.value = !mobileMenuOpen.value;
    };

    const handleScroll = () => {
      isNavShrink.value = window.scrollY > 60;
    };

    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("scroll", handleScroll);
    });

    return {
      mobileMenuOpen,
      isNavShrink,
      toggleMobileMenu,
    };
  },
};
</script>
<template>
  <nav id="car-nav">
    <div class="nav-content">
      <div class="main-content">
        <!-- Start-left-nav -->
        <div class="left-nav">
          <img
            src="/img/cardealer/cardealer-logo.png"
            alt="CarDealer"
            class="car-logo"
          />
          <div class="fav-count">
            <CarFavouriteStar />
            <i class="fa fa-eye" aria-hidden="true"></i>
          </div>
        </div>
        <!-- End-left-nav -->

        <!-- Start-right-nav -->
        <div class="right-nav">
          <div
            class="car-navlinks"
            :class="[
              $route.fullPath === '/' ? 'red' : 'blue',
              { shrink: isNavShrink },
            ]"
          >
            <CarNavLinks />
          </div>

          <div class="actions">
            <CarButton text="Contact" class="car-button contact" />
            <CarButton text="Email" class="car-button email" />
          </div>
          <!--  -->
          <div class="nav-button">
            <span @click="toggleMobileMenu">Menu</span>
            <button
              @click="toggleMobileMenu"
              class="car-hamburger"
              aria-label="toggle Navigation"
            >
              <span v-if="mobileMenuOpen">
                <!-- MENU IS OPEN -->
                <svg
                  width="32"
                  height="32"
                  version="1.1"
                  viewBox="0 -960 960 960"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g stroke-width="0">
                    <circle cx="478.79" cy="-480" r="98.891" />
                    <rect
                      transform="matrix(.70711 .70711 .70711 -.70711 0 0)"
                      x="-442.24"
                      y="604.78"
                      width="882"
                      height="150"
                      stroke-width="0"
                    />
                    <rect
                      transform="matrix(.70711 -.70711 -.70711 -.70711 0 0)"
                      x="238.78"
                      y="-73.761"
                      width="882"
                      height="150"
                      stroke-width="0"
                    />
                  </g>
                </svg>
              </span>
              <span v-if="!mobileMenuOpen">
                <!-- MENU IS CLOSED -->
                <svg
                  width="32"
                  height="32"
                  version="1.1"
                  viewBox="0 -960 960 960"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g stroke-width="0">
                    <circle cx="478.79" cy="-480" r="98.891" />
                    <circle cx="478.79" cy="-739.95" r="98.891" />
                    <circle cx="478.79" cy="-218.84" r="98.891" />
                    <circle
                      transform="rotate(90)"
                      cx="-479.4"
                      cy="-739.35"
                      r="98.891"
                    />
                    <circle
                      transform="rotate(90)"
                      cx="-479.4"
                      cy="-218.24"
                      r="98.891"
                    />
                  </g>
                </svg>
              </span>
            </button>
          </div>
        </div>
        <!-- End-right-nav -->
      </div>
      <div v-if="mobileMenuOpen" class="car-mobilenavlinks">
        <CarNavLinks />
      </div>
    </div>
  </nav>
</template>

<style lang="scss">
@import "@/assets/scss/partials/colours";

nav#car-nav {
  width: 100%;
  padding: 0 0.5rem;
  // border-bottom: 1px solid #ccc;
  div.nav-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    div.main-content {
      display: flex;
      width: 100%;
      justify-content: space-between;
    }
    // LEFT-NAV
    .left-nav {
      display: flex;
      align-items: center;
      .car-logo {
        width: 140px;
        transition: 1s;
        @media (min-width: 1024px) {
          width: 200px;
        }
      }
      .fav-count {
        display: none;
        @media (min-width: 768px) {
          display: flex;
          margin-left: 2rem;
        }
        i {
          margin-right: 0.25rem;
        }
      }
    }
    // RIGHT-NAV
    .right-nav {
      display: flex;
      align-items: center;
      .actions {
        button.email {
          display: none;
          @media (min-width: 768px) {
            display: inline-block;
          }
        }
      }
      .nav-button {
        display: flex;
        align-items: center;
        @media (min-width: 1024px) {
          display: none;
        }
        > span {
          display: block;
          margin-left: 1rem;
          font-weight: bold;
          @media (min-width: 1024px) {
            display: none;
          }
        }
        // MOBILE
        // Hamburger
        button.car-hamburger {
          display: block;
          height: 48px;
          background-color: transparent;
          border: 0;
        }
      }
    }
  }
}
div.car-navlinks {
  display: none;
  @media (min-width: 1024px) {
    display: block;
  }
  a {
    position: relative;
    display: block;
    float: left;
    padding: 2rem 0.8vw;
    overflow: hidden;
    text-decoration: none;
    color: black;
    transition: 0.5s;
    &.router-link-active {
      font-weight: bold;
      background: url("/assets/img/active-bar.png");
      background-repeat: no-repeat;
      background-position-x: center;
      background-position-y: -12px;
    }
    &:hover {
      font-weight: bold;
    }
  }
  &.shrink a {
    padding: 0.75rem 0.8vw;
  }
}

div.car-mobilenavlinks {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 48px;
  width: 100%;
  background-color: #dddddd;
  @media (min-width: 1024px) {
    display: none;
  }
  a {
    padding: 1rem 0.5rem;
    text-align: center;
    text-decoration: none;
    color: black;
    border-top: 1px solid white;
    border-top: 1px solid black;
    &:hover {
      background-color: #e6e6e6;
    }
  }
}
</style>
