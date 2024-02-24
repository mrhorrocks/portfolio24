<template>
  <ul class="toggle-type">
    <li><a href="#" class="active">All</a></li>
    <li><a href="#">New</a></li>
    <li><a href="#">Used</a></li>
    <li><a href="#">Offers</a></li>
  </ul>
</template>

<script lang="ts" setup></script>

<style lang="scss">
.toggle-type {
  display: flex;
  width: 100%;
  li {
    background-color: #b4b4b4;
    min-width: 25%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      color: black;
      font-size: 0.875rem;
      text-decoration: none;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .active {
      border-bottom: 5px solid #7572ff;
    }
    &:hover {
      background-color: lighten(#b4b4b4, 30%);
    }
  }
}
</style>
