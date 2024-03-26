<template>
  <div class="social-badges">
    <a href="https://www.linkedin.com/in/mrmarkhorrocks/" title="Linked In">
      <img
        src="/img/homepage/linkedin.png"
        alt="Linked In"
        width="26px"
        height="26px"
    /></a>
    <a href="https://github.com/mrhorrocks" title="Github">
      <img
        src="/img/homepage/github.png"
        alt="Github"
        width="26px"
        height="26px"
    /></a>
  </div>
</template>

<style lang="scss">
.social-badges {
  display: none;
  margin: 1rem 0;
  text-align: center;
  a {
    display: inline-block;
    width: 26px;
    height: 26px;
    margin-right: 0.5rem;
    padding: 0;
    img {
      width: 100%;
    }
    // &:hover {
    //   width: 30px;
    // }
  }
  @media (min-width: 400px) {
    display: block;
  }
  @media (min-width: 768px) {
    text-align: left;
  }
}
</style>
