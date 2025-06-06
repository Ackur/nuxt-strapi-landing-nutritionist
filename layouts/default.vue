<template>
  <div class="d-contents">
    <DefaultHeader />
    <main class="app-main">
      <NuxtPage />
    </main>
    <DefaultFooter />

    <ButtonTop :offset-top="20" :offset-bottom="93" />
  </div>
</template>

<script setup lang="ts">
import ButtonTop from "./components/ButtonTop.vue";
import DefaultFooter from "./components/DefaultFooter.vue";
import DefaultHeader from "./components/DefaultHeader.vue";
</script>
