# blog-skeleton with Nuxt 3 & Nuxt Content v2

Visit the [Nuxt documentation](https://nuxt.com/) here.
Visit the [Nuxt Content documentation](https://content.nuxt.com/) here.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run generate
```

Locally preview production build:

```bash
npm run preview
```

Checkout the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Styling

[SASS](https://www.npmjs.com/package/sass) is pre installed so you can add SCSS styling to vue components just like in this example.

```bash
<template>
  <!-- content -->
</template>

<style lang="scss" scoped>
h1 {
  font-size: 1rem;
  span {
    color: red;
  }
}
</style>
```

SCSS is compiled on the fly when saving a file.

Alternitavly you can add styles to the global style sheets which can be found at /assets/scss.
