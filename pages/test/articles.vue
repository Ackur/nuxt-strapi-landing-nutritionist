<template>
  <div>
    <p>categories</p>
    <code>
      <pre>
          {{ data }}
      </pre>
    </code>
  </div>
</template>

<script setup>
const { find, findOne } = useStrapi();

// const { data } = await useAsyncData("categories", () =>
//   find("categories", { sort: ["id:desc"], populate: "*" })
// );
const { data } = await useAsyncData("hero", () => findOne("hero", { populate: "*" }));
</script>
