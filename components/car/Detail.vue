<script setup>
defineProps({
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
});
</script>

<template>
  <details class="filters-menu">
    <summary>{{ title }}</summary>
    <div class="content">
      {{ content }}
      <slot />
    </div>
  </details>
</template>

<style lang="scss">
details.filters-menu {
  background: transparent;

  summary {
    position: relative;
    padding: 0.75rem 0.5rem;
    font-weight: bold;
    border-bottom: 1px solid #f4f4f4;
    list-style: none;
    cursor: pointer;
    &:hover {
      background-color: #cfcfcf;
    }
  }

  /* Create a new custom triangle on the right side */
  summary::after {
    position: absolute;
    top: 8px;
    right: 5px;
    width: 24px;
    height: 24px;
    content: "";
    background-image: url("/assets/img/add-expand.png");
    background-repeat: no-repeat;
    transition: 0.5s;
    background-color: white;
    border-radius: 0.5rem;
    &:hover {
      background: url("/assets/img/remove-collapse.png");
    }
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
