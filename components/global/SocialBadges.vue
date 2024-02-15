<template>
  <div class="social-badges">
    <a href="https://www.linkedin.com/in/mrmarkhorrocks/">
      <img src="/img/homepage/linkedin.png" alt="Linked In"
    /></a>
    <a href="https://github.com/mrhorrocks">
      <img src="/img/homepage/github.png" alt="Github"
    /></a>
  </div>
</template>

<style lang="scss">
.social-badges {
  display: none;
  margin: 1rem 0;
  text-align: center;
  a {
    margin-right: 0.5rem;
  }
  @media (min-width: 400px) {
    display: block;
  }
  @media (min-width: 768px) {
    text-align: left;
  }
}
</style>
