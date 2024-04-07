<template>
  <div class="tech-badges">
    <div class="badge">
      <div class="tool-tip-text">Html 5</div>
      <img
        src="/img/homepage/tech_logos/Html5.png"
        width="40px"
        height="40px"
        alt="Html5"
      />
    </div>
    <div class="badge">
      <div class="tool-tip-text">CSS 3</div>
      <img
        src="/img/homepage/tech_logos/CSS3.png"
        width="40px"
        height="40px"
        alt="CSS3"
      />
    </div>
    <div class="badge">
      <div class="tool-tip-text">Sass</div>
      <img
        src="/img/homepage/tech_logos/Sass.png"
        width="40px"
        height="40px"
        alt="Sass"
      />
    </div>
    <div class="badge">
      <div class="tool-tip-text">Nuxt</div>
      <img
        src="/img/homepage/tech_logos/Nuxt.png"
        width="40px"
        height="40px"
        alt="Nuxt"
      />
    </div>
    <div class="badge">
      <div class="tool-tip-text">JS</div>
      <img
        src="/img/homepage/tech_logos/JS.png"
        width="40px"
        height="40px"
        alt="JS"
      />
    </div>
    <div class="badge">
      <div class="tool-tip-text">Decap CMS</div>
      <img
        src="/img/homepage/tech_logos/Decap.png"
        width="40px"
        height="40px"
        alt="Decap"
      />
    </div>
  </div>
</template>

<style lang="scss">
.tech-badges {
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 1rem 0;
  margin: 0 auto;
  width: fit-content;
  @media (min-width: 768px) {
    justify-content: flex-start;
    margin: 0;
  }
  @media (min-width: 1200px) {
    justify-content: flex-start;
  }
  .badge {
    position: relative;
    img {
      position: relative;
      margin: 0.2rem;
      width: 30px;
      border-radius: 0.5rem;
    }
    .tool-tip-text {
      visibility: hidden;
      width: 70px;
      position: absolute;
      z-index: 1;
      top: -22px;
      left: -17px;
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
  @media (min-width: 768px) {
    text-align: left;
  }
}
</style>
