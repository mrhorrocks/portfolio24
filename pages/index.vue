<script setup lang="ts">
useHead({
  titleTemplate: "Home - %s",
  script: [
    { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" },
  ],
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
          Lorem ipsum dolor, sit amet consectetur adipisicing.
        </h1>
      </div>
      <!-- Slide -->
      <div class="slide-wrapper col-span-2">
        <input type="radio" name="slide" id="c1" checked />
        <label for="c1" class="card">
          <div class="row">
            <div class="icon">1</div>
            <div class="description">
              <h4>Winter</h4>
              <p>Winter has so much to offer - creative activities</p>
            </div>
          </div>
        </label>
        <input type="radio" name="slide" id="c2" />
        <label for="c2" class="card">
          <div class="row">
            <div class="icon">2</div>
            <div class="description">
              <h4>Digital Technology</h4>
              <p>Gets better every day - stay tuned</p>
            </div>
          </div>
        </label>
        <input type="radio" name="slide" id="c3" />
        <label for="c3" class="card">
          <div class="row">
            <div class="icon">3</div>
            <div class="description">
              <h4>Globalization</h4>
              <p>Help people all over the world</p>
            </div>
          </div>
        </label>
        <input type="radio" name="slide" id="c4" />
        <label for="c4" class="card">
          <div class="row">
            <div class="icon">4</div>
            <div class="description">
              <h4>New technologies</h4>
              <p>Space engineering becomes more and more advanced</p>
            </div>
          </div>
        </label>
      </div>
    </div>
  </section>
</template>

<style>
h1.site-headline {
  font-size: 3rem;
  line-height: 1.3;
  padding: 0 1rem 1rem 0;
}

.slide-wrapper {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  height: 400px;
  @media (min-width: 900px) {
    justify-content: flex-end;
    flex-direction: row;
  }
}

.card {
  display: flex;
  align-items: flex-end;
  min-width: 80px;
  width: 80px;
  padding-right: 0.5rem;
  /* padding-bottom: 0.5rem; */
  margin: 0rem 0rem 1rem 0;
  background-size: cover;
  background-color: white;
  cursor: pointer;
  overflow: hidden;
  border-radius: 1rem;
  transition: 0.6s cubic-bezier(0.28, -0.03, 0, 0.99);
  box-shadow: 0px 5px 10px -5px rgba(0, 0, 0, 0.8);
  @media (min-width: 900px) {
    margin: 0rem 0rem 0rem 1rem;
  }
}

.card > .row {
  display: flex;
  flex-wrap: nowrap;
  color: white;
}

.card > .row > .icon {
  display: flex;
  justify-content: center;
  background: #223;
  color: white;
  border-radius: 50%;
  min-width: 50px;
  align-items: center;
  margin: 15px;
}

.card > .row > .description {
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 80px;
  width: auto;
  opacity: 0;
  transform: translateY(30px);
  transition-delay: 0.3s;
  transition: all 0.3s ease;
}

.description p {
  /* display: none; */
  color: #b0b0ba;
  line-height: 1.4;
}

.description h4 {
  text-transform: uppercase;
  color: black;
  padding: 0rem 0 0.2rem;
}

input {
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
  background-image: url("./img1.jpeg");
}
.card[for="c2"] {
  background-image: url("./img2.jpeg");
}
.card[for="c3"] {
  background-image: url("./img3.jpeg");
}
.card[for="c4"] {
  background-image: url("./img4.jpeg");
}
</style>
