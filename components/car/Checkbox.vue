<script setup>
defineProps({
  value: {
    type: String,
    default: "false",
  },
  id: {
    type: String,
  },
  name: {
    type: String,
    default: "name",
  },
  label: {
    type: String,
  },
  checked: {
    type: String,
  },
  modelValue: {
    type: String, // Assuming modelValue is a string type
  },
  emits: ["update:modelValue"],
});
</script>
<template>
  <label class="checkbox" :for="id">
    <input
      type="checkbox"
      :id="id"
      :checked="checked"
      autocomplete="on"
      :name="name"
      :value="value"
      @input="$emit('update:modelValue', $event.target.value)"
    />

    <span class="checkboxLabel">{{ label }}</span>
    <span class="checkmark"></span>
  </label>
</template>

<style lang="scss">
/* Customize the label (the container) */
/* Checkbox */
.checkbox {
  display: flex;
  align-items: center;
  width: max-content;
  margin: 0 0.5rem 0.5rem 0;
  padding: 0.25rem 0.4rem;
  border-radius: 0.75rem;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  background-color: #f6f7fb;
  cursor: pointer;
}
/* Hide the browser's default checkbox */
.checkbox input {
  display: none;
}
// UNCHECKED  /* Create a custom checkbox */
.checkbox .checkmark {
  height: 20px;
  width: 20px;
  background-color: #eee;
  border: 0.15rem solid #d1d6e0;
  border-radius: 0.5rem;
}
/* On mouse-over, add a background color */
.checkbox:hover input ~ .checkmark {
  background-color: lighten(#f87b7b, 15%);
  &:before {
    border: solid black;
    border-width: 0 2px 2px 0;
  }
  &:after {
    border: solid black;
    border-width: 0 4px 2px 0;
  }
}
/* When the checkbox is checked, add a this background */
.checkbox input:checked ~ .checkmark {
  background-color: #f87b7b;
  border-color: #f87b7b;
  &:before {
    border: solid #f87b7b;
    border-width: 0 2px 2px 0;
  }
  &:after {
    border: solid white;
    border-width: 0 4px 2px 0;
  }
}
/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:before {
  content: "";
  position: relative;
  display: block;
  top: 5px;
  left: 9px;
  width: 0px;
  height: 8px;
  border: solid #cccccc;
  border-width: 0 2px 2px 0;
  -webkit-transform: rotate(360deg);
  -ms-transform: rotate(360deg);
  transform: rotate(360deg);
  // display: none;
}
.checkmark:after {
  content: "";
  position: relative;
  display: block;
  top: -1px;
  left: 5px;
  width: 6px;
  height: 0px;
  border: solid #cccccc;
  border-width: 0 4px 2px 0;
  -webkit-transform: rotate(360deg);
  -ms-transform: rotate(360deg);
  transform: rotate(360deg);

  // display: none;
}
/* Show the checkmark when checked */
// .checkbox input:checked ~ .checkmark:after,
// .checkbox input:checked ~ .checkmark:before {
//   display: block;
//   // display: none;
// }
.checkboxLabel {
  margin-right: 0.5rem;
}
</style>
