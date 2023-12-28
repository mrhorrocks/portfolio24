## Check the output of "/assets/scss/global.scss"

This app is configured to look at "assets/scss/global.scss" for its styling. This means you are unable to observe the full css output.

```bash
nuxt.config.ts

css: [
"@/assets/scss/global.scss",
],
```

For observational analysis you can run the command below to compile "assets/scss/global.scss" into native css and write the file to this folder.

```bash
npm run check-css
```
