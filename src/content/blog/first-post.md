---
title: "First Post"
description: "This is the first article"
img: "images/cover-(1).png"
tags: [Nuxt, Test, First]
---

## My first blog post

The first blog post using [Nuxt 3 + Nuxt-Content 2](https://content.nuxtjs.org/)

> This is the Blockquote.

I'm currently building it using the following:

- Nuxt.js
- Nuxt Content module
- TailwindCSS
  - TailwindCSS typography

## Nuxt.js

[Nuxt](https://nuxtjs.org/) is a powerful Vue framework that offers great development features such as server side rendering.

```bash
npx nuxi init nuxt-app
cd nuxt-app
yarn install
yarn dev -o
```

```ts
// ./nuxt.config.ts
import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
  // My Nuxt config
});
```

::InfoBox{type="error"}
Here's a handy bit of information for you!

#details
This will be rendered inside the `description` slot. _It's important_ to see how this **works**.
[More information can be found here](#)
::

## Nuxt content module

Empower your NuxtJS application with [@nuxt/content module](https://content.nuxtjs.org/): write in a content/ directory and fetch your Markdown, JSON, YAML, XML and CSV files through a MongoDB like API, acting as a Git-based Headless CMS.

You can get started with Nuxt Content by installing a fresh project

```bash
npx nuxi init content-app -t content
```
