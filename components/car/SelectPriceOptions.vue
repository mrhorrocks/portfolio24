<script setup>
defineProps({
  id: {
    type: String,
    default: "id-prop-is-required",
  },
  label: {
    type: String,
    required: false,
  },
  modelValue: {
    type: String,
    default: "", // Default value for modelValue
  },
});

const selectedOption = ref("");
</script>

<template>
  <div class="selectbox">
    <label v-if="label" :for="id">{{ label }}</label>
    <select
      :id="id"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    >
      <option v-if="!selectedOption" value="">{{ label }}</option>
      <option value="relevance">Relevance</option>
      <option value="price-asc">Price (low to high)</option>
      <option value="price-desc">Price (high to low)</option>
      <option value="distance">Distance</option>
      <option value="mileage">Mileage</option>
      <option value="year-dsc">Age (newest)</option>
      <option value="year-asc">Age (oldest)</option>
      <option value="most-recent">Most recent</option>
    </select>
  </div>
</template>

<style scss scoped>
.selectbox {
  width: 80%;
  label {
    display: none;
  }
  select {
    width: 100%;
    padding: 0.75rem 0.7rem;
    border: 0;
    border-radius: 0.76rem;
    background-color: white;
    cursor: pointer;
    @media (min-width: 768px) {
      background-color: #e8e8e8;
    }
    option:checked {
      background-color: #dddddd;
    }
  }
}
</style>
