<script setup lang="ts">
useHead({
  titleTemplate: "Home - %s",
  // script: [
  //   { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" },
  // ],
});

// REDIRECT
if (location.href.indexOf("#invite_token") !== -1) {
  const urlSplit: string[] = document.URL.split("#");
  window.location.href = `/admin/#${urlSplit[1]}`;
}
</script>

<template>
  <section>
    <div class="container md:grid md:cols-3">
      <!-- Headline -->

      <div class="col-span-1">
        <h1 class="site-headline">
          This is my Portfolio.
          <br />
          <span>Built with </span><span>Nuxt, Git</span> &
          <span>Netlify</span>
        </h1>
      </div>
      <!-- Slides -->
      <div class="slide-wrapper col-span-2">
        <input type="radio" name="slide" id="c1" checked />
        <label for="c1" class="card">
          <div class="row">
            <div class="icon">1</div>
            <div class="description">
              <h4>Big Robot</h4>
              <p>Blender, Flash, HTML, CSS</p>
              <NuxtLink to="/blog/2024-01-18-graphics-2008/"
                >KEEP READING >></NuxtLink
              >
            </div>
          </div>
        </label>

        <input type="radio" name="slide" id="c2" />
        <label for="c2" class="card">
          <div class="row">
            <div class="icon">2</div>
            <div class="description">
              <h4>2024</h4>
              <p>Nuxt, Git, Netlify & Decap CMS</p>
              <NuxtLink to="blog/2024-01-09-about-this-portfolio/"
                >KEEP READING >></NuxtLink
              >
            </div>
          </div>
        </label>
        <!-- 
        <input type="radio" name="slide" id="c3" />
        <label for="c3" class="card">
          <div class="row">
            <div class="icon">3</div>
            <div class="description">
              <h4>Globalization</h4>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
        </label>

        <input type="radio" name="slide" id="c4" />
        <label for="c4" class="card">
          <div class="row">
            <div class="icon">4</div>
            <div class="description">
              <h4>New technologies</h4>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
        </label>
         -->
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/scss/partials/colours";
h1.site-headline {
  font-size: clamp(2rem, 2.5vw, 3rem);
  line-height: 1;
  padding: 0 1rem 1rem 0;
  span {
    color: #7c8497;
    font-size: clamp(3rem, 4.7vw, 4.2rem);
    text-shadow: 1px 1px 0px #000;
    &:nth-of-type(1) {
      color: black;
    }
  }
}

.slide-wrapper {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  height: 200px;
  @media (min-width: 970px) {
    justify-content: flex-end;
    flex-direction: row;
  }
}

.card {
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  min-width: 91px;
  width: 91px;
  padding-right: 0.5rem;
  overflow: hidden;
  cursor: pointer;
  margin: 0rem 0rem 1rem 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #fff;
  transition: 0.3s cubic-bezier(0.28, -0.03, 0, 0.99);
  box-shadow: 1px 3px 4px #00000020;
  @media only screen and (min-width: 970px) {
    align-items: flex-end;
    margin: 0rem 1rem 0rem 0rem;
  }
}

.card > {
  .row {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    .icon {
      display: block;
      background: #000000;
      color: white;
      border-radius: 50%;
      min-width: 4.5rem;
      line-height: 4.5rem;
      margin: 0.6rem;
      text-align: center;
      font-weight: bold;
      font-size: 1.5rem;
      transition: 0.25s;
      &:hover {
        background: #555;
      }
    }
    .description {
      height: 80px;
      width: 100%;
      opacity: 0;
      text-decoration: none;
      transform: translateY(0px);
      transition: all 0.3s ease;
      transition-delay: 0.3s;
      h4 {
        font-size: clamp(1rem, 1vw, 1.17rem);
        text-transform: uppercase;
        padding: 0rem 0 0.2rem;
        padding: 0.25rem;
        margin-top: 0.5rem;
        margin-bottom: 0.25rem;
        background-color: #0000005c;
        // color: white;
        color: #fff767;

        backdrop-filter: blur(5px);
      }
      p {
        font-size: 0.8rem;
        padding: 0 0.25rem;
        margin-bottom: 0.25rem;
        background-color: #0000005c;
        color: white;
        backdrop-filter: blur(5px);
      }
      a {
        display: inline-block;
        font-size: 0.8rem;
        padding: 0.25rem;
        margin-right: 1rem;
        background-color: #0000005c;
        color: white;
        text-decoration: none;
        margin-bottom: 0.25rem;
        transition: 0.25s;
        backdrop-filter: blur(5px);
        &:hover {
          background-color: #000;
          color: white;
        }
      }
    }
  }
}

input[name="slide"] {
  display: none;
}

input:checked + label {
  /* max-width: 600px; */
  width: 100%;
}

input:checked + label .description {
  opacity: 1 !important;
  transform: translateY(0) !important;
}

.card[for="c1"] {
  background-image: url("/img/homepage/img1.jpg");
}
.card[for="c2"] {
  background-image: url("/img/homepage/img2.jpg");
  @media (min-width: 768px) {
  }
}
// .card[for="c3"] {
//   background-image: url("./img3.jpeg");
// }
// .card[for="c4"] {
//   background-image: url("./img4.jpeg");
// }
</style>
