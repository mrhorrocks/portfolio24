<template>
  <div class="app-height">
    <TheHeader />
    <Body class="homepage">
      <main class="homepage">
        <!-- Scroll to top -->
        <ScrollToTopButton />
        <slot />
      </main>
      <TheFooter />
    </Body>
  </div>
</template>

<style>
body.homepage {
  background-color: #363636;
}
</style>
