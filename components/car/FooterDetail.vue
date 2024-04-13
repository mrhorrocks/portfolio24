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
    default: false,
  },
});
const detailsElement = ref(null);

const handleResize = () => {
  const screenWidth = window.innerWidth;
  if (screenWidth >= 1200) {
    detailsElement.value.setAttribute("open", "");
  } else {
    detailsElement.value.removeAttribute("open");
  }
};

onMounted(() => {
  window.addEventListener("resize", handleResize);
  handleResize(); // Call it once to set the initial state
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
});
</script>

<template>
  <details :open="isOpen" ref="detailsElement">
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
  background: transparent;

  summary {
    position: relative;
    padding: 0.75rem 0.5rem;
    font-weight: bold;
    border-bottom: 1px solid #f4f4f4;
    list-style: none;
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
    background-image: url("/assets/img/add-expand.png");
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
