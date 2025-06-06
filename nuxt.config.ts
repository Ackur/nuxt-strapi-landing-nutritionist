// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/eslint", "@nuxtjs/strapi"],
  devtools: { enabled: false },
  css: ["~/assets/css/index.css"],
  compatibilityDate: "2025-05-15",
  strapi: {
    url: process.env.STRAPI_URL
  }
});
