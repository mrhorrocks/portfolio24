<template>
  <nav class="main-navigation">
    <ul>
      <li>
        <NuxtLink to="/">Home</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/blog">Blog</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/about">About</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
@import "@/assets/scss/partials/colours";
nav.main-navigation {
  ul {
    display: flex;
    justify-content: flex-end;
    list-style: none;
    margin: 0;
    padding: 0;

    li a {
      display: block;
      padding: 1rem;
      background-color: $theme-colour;

      &:hover {
        background-color: lighten($theme-colour, 10%);
      }

      &:active {
        background-color: lighten($theme-colour, 20%);
      }
    }
  }
}
</style>
