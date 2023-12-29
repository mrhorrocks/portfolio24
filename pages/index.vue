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
    <div class="container">
      <h1>HOME</h1>
      <h2>HOME</h2>
      <h3>HOME</h3>
      <h4>HOME</h4>
      <h5>HOME</h5>
    </div>
  </section>
</template>
