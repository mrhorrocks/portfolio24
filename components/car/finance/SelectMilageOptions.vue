<template>
  <div class="finance-select">
    <label v-if="label" :for="id">{{ label }}</label>
    <select :id="id" :value="modelValue">
      <option v-if="!selectedOption" value="">{{ label }}</option>
      <option value="">Any</option>
      <option value="15000">At least 15,000 miles</option>
      <option value="20000">At least 20,000 miles</option>
      <option value="25000">At least 25,000 miles</option>
      <option value="30000">At least 30,000 miles</option>
      <option value="35000">At least 35,000 miles</option>
      <option value="40000">At least 40,000 miles</option>
      <option value="45000">At least 45,000 miles</option>
      <option value="50000">At least 50,000 miles</option>
      <option value="60000">At least 60,000 miles</option>
      <option value="70000">At least 70,000 miles</option>
      <option value="80000">At least 80,000 miles</option>
      <option value="90000">At least 90,000 miles</option>
      <option value="100000">At least 100,000 miles</option>
      <option value="125000">At least 125,000 miles</option>
      <option value="150000">At least 150,000 miles</option>
      <option value="200000">At least 200,000 miles</option>
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
