<template>
  <footer id="footer">
    <div class="container footer">
      <SocialBadges />
    </div>
  </footer>
</template>

<style lang="scss">
footer#footer {
  // position: fixed;
  // bottom: 0;
  // z-index: 100;
  width: 100%;
  height: 40px;
  background-color: #b6b600;
  .container.footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: inherit;
    .social-badges {
      margin: 0;
      display: block;
      float: left;
    }
  }
}
</style>
