<template>
  <TheHeader />
  <Body class="homepage">
    <main class="homepage">
      <!-- Scroll to top -->
      <ScrollToTopButton />
      <slot />
    </main>
    <TheFooter />
  </Body>
</template>

<style>
body.homepage {
  background-color: #363636;
}
</style>
