<template>
  <footer id="footer">
    <div class="container footer">
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
  .container.footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: -webkit-fill-available;
    .social-badges {
      display: block;
    }
  }
}
</style>
