<template>
  <footer id="footer">
    <div class="container">
      <SocialBadges />
    </div>
  </footer>
</template>

<style lang="scss">
footer#footer {
  position: fixed;
  bottom: 0;
  z-index: 100;
  width: 100%;
  height: 64px;
  background-color: #b6b600;
  .social-badges {
    display: block;
    text-align: right;
  }
}
</style>
