<script>
export default {
  props: {
    title: {
      type: String,
      default: "Add a title prop",
    },
    content: {
      type: String,
    },
    isOpen: {
      type: Boolean,
      default: false, // Set a default value if needed
    },
  },
};
</script>

<template>
  <details :open="isOpen">
    <summary>{{ title }}</summary>
    <div class="content">
      {{ content }}
      <slot />
    </div>
  </details>
</template>

<style lang="scss" scoped>
@import "../../assets/scss/partials/_colours";
details {
  background: white;
  margin-bottom: 0.1rem;

  summary {
    overflow: hidden;
    display: block;
    list-style: none;
    padding: 0.5rem;
    background-color: rgb(173, 120, 120);
    color: white;
    cursor: pointer;
  }

  /* Create a new custom triangle on the right side */
  summary::after {
    position: relative;
    top: 2px;
    left: -12px;
    float: right;
    content: ">";
    transition: 0.1s;
    line-height: 1;
    transform: rotate(-90deg) scaleY(2);
  }

  .content {
    display: flex;
    flex-wrap: wrap;
    padding: 0.5rem 0rem;
  }
}

details[open] > summary::after {
  transform: rotate(90deg) scaleY(2);
  top: 3px;
  left: -4px;
  transition: 0.1s;
}
</style>
