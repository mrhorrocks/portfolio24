<script setup>
defineProps({
  heading: {
    type: String,
    default: "Add a heading",
  },
  calculation: {
    type: String,
    default: "Calculation",
  },
});
</script>

<template>
  <div class="finance-option-card">
    <span>{{ heading }}</span>
    <span>
      <strong>{{ calculation }}</strong>
    </span>
  </div>
</template>

<style lang="scss">
.finance-option-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  width: calc(50% - 1rem);
  @media (min-width: 768px) {
    width: calc(33.3333% - 1rem);
  }
  @media (min-width: 1200px) {
    width: calc(20% - 1rem);
  }
  box-sizing: border-box;
  margin: 0.5rem;
  padding: 1rem;
  background-color: white;
  border-radius: 1rem;
  span {
    text-align: center;
    &:nth-child(2) {
      font-size: 1rem;
    }
  }
}
</style>
