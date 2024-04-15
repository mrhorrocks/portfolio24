<template>
  <footer id="footer">
    <div class="container footer">
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
