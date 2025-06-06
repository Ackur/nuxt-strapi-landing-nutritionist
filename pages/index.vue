<template>
  <div class="main-page">
    <HeroSection />
    <FeaturesSection />
    <BlogsSection />
    <FeedbackSection />
    <PricesSection />
  </div>
</template>

<script setup>
import BlogsSection from "./components/BlogsSection.vue";
import FeaturesSection from "./components/FeaturesSection.vue";
import FeedbackSection from "./components/FeedbackSection.vue";
import HeroSection from "./components/HeroSection.vue";
import PricesSection from "./components/PricesSection.vue";
</script>

<style src="~/assets/css/pages/home.css"></style>
