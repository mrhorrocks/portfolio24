<template>
  <CarCarsHeader />
  <Body id="car-dealer-body">
    <slot />
  </Body>
</template>

<style lang="scss">
#car-dealer-body {
  // font-family: "RobotoCondensed-Regular", Arial, Helvetica, sans-serif;
  font-family: "Roboto", Arial, Helvetica, sans-serif;
  font-size: 0.875rem;
  background-color: white;
  .container-full {
    max-width: 1440px;
    margin: 0 auto;
  }
}
</style>
