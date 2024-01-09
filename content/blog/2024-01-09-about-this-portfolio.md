---
headline: About this Portfolio
title: About this Portfolio
description: A Summary of the Tech used to build this Portfolio.
date: 2024-01-09T15:34:17.109Z
author: MH
featuredArticle: true
---
[Nuxt3](https://nuxt.com/)

I chose Nuxt because I had previous exposure to the Vue ecosystem. There is practically zero config when starting a new project and I found it it very straight forward to just getting the build started.

[Nuxt Content](https://content.nuxt.com/)

This is a custom module built especially for Nuxt. It enables this website to look for its content in a dedicated content folder in the form of Markdown of JSON format. These files are written to this folder by the CMS.

[Decap Headless CMS](https://decapcms.org/)

After researching my options which included Strapi, Contentful and Prismic I decided to go with Decap CMS. Decap used to be Netlify CMS up until the start of 2023. The main difference between Decap and the previously listed CMSs is that Decap writes and deploys its content to the same git repository as the website code. From there I can trigger continuous deployment on Netlify.

[Netlify](https://www.netlify.com/)