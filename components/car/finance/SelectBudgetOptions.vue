<template>
  <div class="finance-select">
    <label v-if="label" :for="id">{{ label }}</label>
    <select :id="id" :value="modelValue">
      <option v-if="!selectedOption" value="">{{ label }}</option>
      <option value="">Any</option>
      <option value="500">£500</option>
      <option value="1000">£1,000</option>
      <option value="1500">£1,500</option>
      <option value="2000">£2,000</option>
      <option value="2500">£2,500</option>
      <option value="3000">£3,000</option>
      <option value="3500">£3,500</option>
      <option value="4000">£4,000</option>
      <option value="4500">£4,500</option>
      <option value="5000">£5,000</option>
      <option value="5500">£5,500</option>
      <option value="6000">£6,000</option>
      <option value="6500">£6,500</option>
      <option value="7000">£7,000</option>
      <option value="7500">£7,500</option>
      <option value="8000">£8,000</option>
      <option value="8500">£8,500</option>
      <option value="9000">£9,000</option>
      <option value="9500">£9,500</option>
      <option value="10000">£10,000</option>
      <option value="11000">£11,000</option>
      <option value="12000">£12,000</option>
      <option value="13000">£13,000</option>
      <option value="14000">£14,000</option>
      <option value="15000">£15,000</option>
      <option value="16000">£16,000</option>
      <option value="17000">£17,000</option>
      <option value="18000">£18,000</option>
      <option value="19000">£19,000</option>
      <option value="20000">£20,000</option>
      <option value="22500">£22,500</option>
      <option value="25000">£25,000</option>
      <option value="27500">£27,500</option>
      <option value="30000">£30,000</option>
      <option value="35000">£35,000</option>
      <option value="40000">£40,000</option>
      <option value="45000">£45,000</option>
      <option value="50000">£50,000</option>
      <option value="55000">£55,000</option>
      <option value="60000">£60,000</option>
      <option value="65000">£65,000</option>
      <option value="70000">£70,000</option>
      <option value="75000">£75,000</option>
      <option value="100000">£100,000</option>
      <option value="250000">£250,000</option>
      <option value="500000">£500,000</option>
      <option value="1000000">£1,000,000</option>
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
