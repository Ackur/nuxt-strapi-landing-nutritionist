import type { Strapi4Error } from "@nuxtjs/strapi";

export default defineNuxtPlugin((nuxt) => {
  nuxt.hook("strapi:error" as any, (e: Strapi4Error) => {
    alert(JSON.stringify({ title: e.error.name, description: e.error.message }, null, 2));
  });
});
