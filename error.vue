<script setup>
useHead({
  titleTemplate: "Home - %s",
});
defineProps(["error"]);
const handleError = () => clearError({ redirect: "/" });
</script>

<template>
  <div class="app-height">
    <TheHeader />
    <main>
      <Head>
        <Title> {{ error.statusCode }} - {{ error.message }} </Title>
        <Meta name="description" content="Error Page" />
      </Head>

      <div class="container">
        <div class="grid grid-cols-1">
          <div class="error-content">
            <h2>{{ error.statusCode }}</h2>
            <p>{{ error.message }}</p>

            <!-- Clear the errors and redirect back to see bellow -->
            <CarButton class="car-button error" @click="handleError()">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="w-6 h-6"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M16 12H8" />
                <path d="m12 8-4 4 4 4" /></svg
              >&nbsp; Go Back</CarButton
            >
          </div>
        </div>
      </div>
    </main>
    <TheFooter />
  </div>
</template>

<style lang="scss" scoped>
.error-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    font-size: 8rem;
    line-height: 1;
    font-weight: bold;
    font-style: italic;
  }
  p {
    font-weight: bold;
    color: var(--dark-grey);
  }
  button.error {
    display: flex;
  }
}
</style>
