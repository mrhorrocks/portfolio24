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

<script>
export default {
  data () {
    return {
      selectedOption: "",
    };
  },
  props: {
    id: {
      type: String,
      required: false,
      default: "id-prop-is-required",
    },
    label: {
      type: String,
      required: false,
    },
    modelValue: {
      type: String, // Assuming modelValue is a string type
    },
  },
  emits: ["update:modelValue"],
};
</script>

<style scss scoped>
.selectbox {
  width: 100%;
  label {
    display: none;
  }
  select {
    border: 0;
    padding: 0.5rem;
    width: 100%;
    option:checked {
      background-color: green;
    }
  }
}
</style>
