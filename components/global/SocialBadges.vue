<template>
  <div class="social-badges">
    <div class="social-badge">
      <div class="tool-tip-text">Linked In</div>
      <a href="https://www.linkedin.com/in/mrmarkhorrocks/" title="Linked In">
        <img
          src="/img/homepage/linkedin.png"
          alt="Linked In"
          width="26px"
          height="26px"
      /></a>
    </div>

    <div class="social-badge">
      <div class="tool-tip-text">Github</div>
      <a href="https://github.com/mrhorrocks" title="Github">
        <img
          src="/img/homepage/github.png"
          alt="Github"
          width="26px"
          height="26px"
      /></a>
    </div>
  </div>
</template>

<style lang="scss">
.social-badges {
  display: flex;
  justify-content: center;
  .social-badge {
    display: none;
    position: relative;
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
      visibility: visible;
      display: flex;
      justify-content: center;
    }
    @media (min-width: 768px) {
      text-align: left;
    }
    .tool-tip-text {
      background-color: RED;
      visibility: hidden;
      width: 70px;
      position: absolute;
      z-index: 1;
      top: -27px;
      left: -20px;
      background-color: #555;
      color: #fff;
      text-align: center;
      padding: 0.25rem;
      border-radius: 6px;
      font-size: 0.8rem;
      opacity: 0;
      transition: opacity 0.6s;
      &::after {
        content: "";
        position: absolute;
        top: 100%;
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: #555 transparent transparent transparent;
      }
    }
    &:hover {
      .tool-tip-text {
        visibility: visible;
        opacity: 1;
      }
    }
  }
}
</style>
