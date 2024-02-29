<script>
export default {
  props: {
    title1: String,
    title2: String,
    title3: String,
  },
};
</script>

<template>
  <div class="tabs">
    <div class="tab">
      <input type="radio" id="tab-1" name="tab-group-1" checked />
      <label for="tab-1">{{ title1 }}</label>
      <div class="content">
        <p>
          <slot name="tab-one"> </slot>
        </p>
      </div>
    </div>
    <div class="tab">
      <input type="radio" id="tab-2" name="tab-group-1" />
      <label for="tab-2">{{ title2 }}</label>
      <div class="content">
        <p>
          <slot name="tab-two" />
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/scss/partials/_colours";
.tabs {
  position: relative;
  min-height: 200px;
  width: 100%;
  clear: both;
}
.tab {
  float: left;
  width: 50%;
  &:last-child {
    label {
      border-right: 2px solid white;
      left: -0px;
    }
  }
}
.tab label {
  position: relative;
  display: flex;
  justify-content: center;
  left: 1px;
  top: -3px;
  padding: 0.35rem 0;
  border-right-width: 1px;
  margin-left: -1px;
  width: 98%;
  font-size: 0.75rem;
  cursor: pointer;
}
.tab [type="radio"] {
  opacity: 0;
  display: none;
}
.content {
  position: absolute;
  top: 23px;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0.5rem;
  border: 2px solid white;
  background: white;
  overflow: auto;
  & p {
    font-size: 1rem;
  }
}
.content > * {
  transition: all 0.6s ease;
}
// Selected Tab
[type="radio"]:checked ~ label {
  background: white;
  border-bottom: 2px solid #7572ff;
  z-index: 2;
}
// Selected content
[type="radio"]:checked ~ label ~ .content {
  z-index: 1;
  border-top: 1px solid #ccc;
}
// All content
[type="radio"]:checked ~ label ~ .content > * {
  opacity: 1;
  transform: translateX(0);
}
</style>
