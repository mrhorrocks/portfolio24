<template>
  <ul class="toggle-type">
    <li><a href="#" class="active">All</a></li>
    <li><a href="#">Used</a></li>
    <li><a href="#">New</a></li>
    <li><a href="#">Offers</a></li>
  </ul>
</template>

<script lang="ts" setup></script>

<style lang="scss">
.toggle-type {
  display: flex;
  width: 100%;
  li {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 25%;
    height: 100%;
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      color: black;
      background-color: white;
      text-decoration: none;
      &:hover {
        background-color: #d1d6e0;
        border-color: darken(#d1d6e0, 10%);
      }
      @media (min-width: 768px) {
        border: 1px solid #d1d6e0;
        border-radius: 0.76rem; // 12rem
        margin: 0 0.25rem 0 0;
        height: 2rem;
      }
    }
    .active {
      border-bottom: 5px solid #7572ff;
      @media (min-width: 768px) {
        background-color: #7572ff;
        border: 0;
        color: white;
        cursor: default;
        &:hover {
          background-color: #7572ff;
        }
      }
    }
  }
}
</style>
