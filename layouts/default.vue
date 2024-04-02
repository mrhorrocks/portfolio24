<template>
  <TheHeader />
  <Body class="app-height">
    <main class="default">
      <!-- Scroll to top -->
      <ScrollToTopButton />
      <slot />
    </main>
    <TheFooter />
  </Body>
</template>
