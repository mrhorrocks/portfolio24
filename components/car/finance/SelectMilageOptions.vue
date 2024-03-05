<template>
  <div class="finance-select">
    <label v-if="label" :for="id">{{ label }}</label>
    <select :id="id" :value="modelValue">
      <option v-if="!selectedOption" value="">{{ label }}</option>
      <option value="0">£0</option>
      <option value="500">£500</option>
      <option value="1000">£1000</option>
      <option value="1500">£1500</option>
      <option value="2000">£2000</option>
      <option value="2500">£2500</option>
      <option value="3000">£3000</option>
      <option value="4000">£4000</option>
      <option value="10000">£10000</option>
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
