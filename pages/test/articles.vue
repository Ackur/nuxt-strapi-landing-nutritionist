<template>
  <div>
    <p>categories</p>
    <code>
      <pre>
          {{ data?.data }}
      </pre>
    </code>
  </div>
</template>

<script setup>
const { find } = useStrapi();

const { data } = await useAsyncData("categories", () =>
  find("categories", { sort: ["id:desc"], populate: "*" })
);
</script>
