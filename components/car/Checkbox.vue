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

<script>
export default {
  props: {
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
  },
};
</script>

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
  background-color: darkred;
  background-color: #f6f7fb;
  cursor: pointer;
}

/* Hide the browser's default checkbox */
.checkbox input {
  display: none;
}

/* Create a custom checkbox */
.checkbox .checkmark {
  height: 1.5rem;
  width: 1.5rem;
  background-color: #eee;
  border: 0.15rem solid #d1d6e0;
  border-radius: 0.5rem;
}

/* On mouse-over, add a background color */
.checkbox:hover input ~ .checkmark {
  background-color: lighten(#f87b7b, 15%);
}

/* When the checkbox is checked, add a blue background */
.checkbox input:checked ~ .checkmark {
  background-color: #f87b7b;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: relative;
  display: none;
}
.checkmark:before {
  content: "";
  position: relative;
  display: none;
}

/* Show the checkmark when checked */
.checkbox input:checked ~ .checkmark:after {
  display: block;
}
.checkbox input:checked ~ .checkmark:before {
  display: block;
}

/* Style the checkmark/indicator */
.checkbox .checkmark:after {
  left: 10px;
  top: 0px;
  width: 0px;
  height: 12px;
  border: solid white;
  border-width: 0 4px 4px 0;
  -webkit-transform: rotate(360deg);
  -ms-transform: rotate(360deg);
  transform: rotate(360deg);
}
.checkbox .checkmark:before {
  left: 4px;
  top: 10px;
  width: 12px;
  height: 0px;
  border: solid white;
  border-width: 0 4px 4px 0;
  -webkit-transform: rotate(360deg);
  -ms-transform: rotate(360deg);
  transform: rotate(360deg);
}

.checkboxLabel {
  margin-right: 0.5rem;
}
</style>
