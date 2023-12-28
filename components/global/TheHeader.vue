<template>
  <header id="header">
    <SiteLogo />
    <TheNavigation />
  </header>
</template>

<style lang="scss">
@import "@/assets/scss/partials/colours";
header#header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: lighten($theme-colour, 20%);
}
</style>
