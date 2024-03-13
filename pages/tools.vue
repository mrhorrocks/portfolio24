<script setup lang="ts">
useHead({
  titleTemplate: "Tools - %s",
});
</script>

<template>
  <section>
    <div class="container">
      <h1>Tools</h1>

      <div class="md:grid md:cols-3 md:gap-2">
        <div class="col-span-2">
          <h2>Current Stack</h2>
          <div class="tool-card">
            <NuxtLink
              external
              class="chip"
              href="https://nuxt.com/"
              title="Nuxt"
              >Nuxt</NuxtLink
            >
            <NuxtLink
              external
              class="chip"
              href="https://sass-lang.com/"
              title="SCSS"
              >SCSS</NuxtLink
            >
            <NuxtLink
              external
              class="chip"
              href="https://www.npmjs.com/"
              title="NPM"
              >NPM</NuxtLink
            >
            <NuxtLink
              external
              class="chip"
              href="https://git-scm.com/"
              title="GIT"
              >GIT</NuxtLink
            >
            <NuxtLink
              external
              class="chip"
              href="https://code.visualstudio.com/"
              title="VSCode"
              >VSCode</NuxtLink
            >
            <NuxtLink
              external
              class="chip"
              href="https://www.adobe.com/uk/"
              title="Adobe suite"
              >Adobe</NuxtLink
            >
            <NuxtLink
              external
              class="chip"
              href="https://tailwindcss.com/"
              title="Tailwind"
              >Tailwind</NuxtLink
            >
            <NuxtLink
              external
              class="chip"
              href="https://laravel.com/"
              title="Laravel"
              >Laravel</NuxtLink
            >
            <NuxtLink
              external
              class="chip"
              href="https://www.artweaver.de/en"
              title="Artweaver"
              >Artweaver
            </NuxtLink>
            <NuxtLink
              external
              class="chip"
              href="https://inkscape.org/"
              title="Inkscape"
              >Inkscape</NuxtLink
            >
            <NuxtLink
              external
              class="chip"
              href="https://chat.openai.com/"
              title="ChatGPT"
              >ChatGPT</NuxtLink
            >
          </div>

          <h2>Previous Stack</h2>
          <div class="tool-card">
            <NuxtLink
              external
              class="chip"
              href="https://www.docker.com/"
              title="Docker"
              >Docker</NuxtLink
            >
            <NuxtLink
              external
              class="chip"
              href="https://cakephp.org/"
              title="Cake PHP"
              >CakePHP</NuxtLink
            >
            <NuxtLink
              external
              class="chip"
              href="https://www.highcharts.com/"
              title="Highcharts"
              >Highcharts
            </NuxtLink>
            <NuxtLink
              external
              class="chip"
              href="https://www.mysql.com/"
              title="MySQL"
              >MySQL</NuxtLink
            >
            <NuxtLink
              external
              class="chip"
              href="https://jquery.com/"
              title="JQuery"
              >JQuery</NuxtLink
            >
            <NuxtLink
              external
              class="chip"
              href="https://jqueryui.com/"
              title="JQuery UI"
              >JQuery UI</NuxtLink
            >
            <NuxtLink
              external
              class="chip"
              href="https://www.chartjs.org/"
              title="Chartjs"
              >Chartjs</NuxtLink
            >
            <NuxtLink
              external
              class="chip"
              href="https://jquery.com/"
              title="Jquery"
              >Jquery</NuxtLink
            >
            <NuxtLink
              external
              class="chip"
              href="https://subversion.apache.org/"
              title="SVN"
              >SVN</NuxtLink
            >
            <NuxtLink
              external
              class="chip"
              href="https://wordpress.com/"
              title="Wordpress"
              >Wordpress</NuxtLink
            >
            <NuxtLink
              external
              class="chip"
              href="https://www.joomla.org/"
              title="Joomla"
              >Joomla</NuxtLink
            >
            <NuxtLink
              external
              class="chip"
              href="https://www.blender.org/"
              title="Blender"
              >Blender</NuxtLink
            >
          </div>
        </div>

        <div class="col-span-1">
          <h2>Resources</h2>
          <div class="tool-card">
            <NuxtLink
              external
              class="chip"
              href="https://heroicons.com/"
              title="Hero Icons"
              >Hero Icons</NuxtLink
            >
            <NuxtLink
              external
              class="chip"
              href="https://fonts.google.com/icons"
              title="Material Icons"
              >Material Icons</NuxtLink
            >
            <NuxtLink
              external
              class="chip"
              href="https://css2sass.herokuapp.com/"
              title="CSS to SASS"
              >CSS to SASS
            </NuxtLink>
            <NuxtLink
              external
              class="chip"
              href="https://csvjson.com/csv2json"
              title="CSV to JSON"
              >CSV to JSON
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.tool-card {
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
