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

<style lang="scss">
@import "../../assets/scss/partials/_colours";
details {
  background: white;
  margin-bottom: 0.1rem;

  summary {
    position: relative;
    padding: 0.75rem 0.5rem;
    font-weight: bold;
    color: black;
    border-bottom: 1px solid #f4f4f4;
    cursor: pointer;
  }

  /* Create a new custom triangle on the right side */
  summary::after {
    position: absolute;
    top: 8px;
    right: 0px;
    width: 24px;
    height: 24px;
    content: "";
    background: url("/assets/img/add-expand.png");
    background-repeat: no-repeat;
    transition: 0.5s;
  }

  .content {
    display: flex;
    flex-wrap: wrap;
    padding: 0.5rem 0rem;
  }
}

details[open] > summary::after {
  background: url("/assets/img/remove-collapse.png");
  transition: 0.5s;
}
</style>
