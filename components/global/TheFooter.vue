<template>
  <footer id="footer">
    <div class="container footer">
      <div class="version">v3.4.1</div>
      <!-- Tech logos -->
      <!-- <TechBadges /> -->
      <SocialBadges />
    </div>
  </footer>
</template>

<style lang="scss">
footer#footer {
  width: 100%;
  height: 40px;
  margin-top: 2rem;
  background-color: #b6b600;
  .container.footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: inherit;
    .version {
      font-size: 0.75rem;
    }
    // .social-badges {
    //   margin: 0;
    //   display: block;
    // }
  }
}
</style>
