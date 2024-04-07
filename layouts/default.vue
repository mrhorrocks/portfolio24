<template>
  <div class="app-height">
    <TheHeader />
    <Body>
      <main class="default">
        <!-- Scroll to top -->
        <ScrollToTopButton />
        <slot />
      </main>
      <TheFooter />
    </Body>
  </div>
</template>
