<script setup>
defineProps({
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
  emits: ["update:modelValue"],
});

const selectedOption = ref("");
</script>

<template>
  <div class="finance-select">
    <label v-if="label" :for="id">{{ label }}</label>
    <select :id="id" :value="modelValue">
      <option v-if="!selectedOption" value="">{{ label }}</option>
      <option value="6months">6 Months</option>
      <option value="12months">12 months</option>
      <option value="18months">18 months</option>
      <option value="24months">24 months</option>
      <option value="36months">36 months</option>
      <option value="48months">48 months</option>
    </select>
  </div>
</template>
