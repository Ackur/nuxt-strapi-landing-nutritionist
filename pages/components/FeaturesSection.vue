<template>
  <section class="features-section app-container">
    <article class="features-section__heading text-center">
      <h1 class="app-section-title">{{ blockContent.title }}</h1>
      <p class="app-section-description">
        {{ blockContent.description }}
      </p>
    </article>
    <div class="features-section__cards">
      <article
        v-for="item in blockContent.features"
        :key="item.id"
        class="app-card-default features-section__cards--item"
      >
        <h1 class="app-card-default--title">
          <span class="app-card-default--icon-container">
            <svg width="40" height="40" class="app-card-default--icon">
              <use :href="`/images/icons/icons-symbol.svg#${item.iconName}`" />
            </svg>
          </span>
          {{ item.title }}
        </h1>
        <p class="app-card-default--description">
          {{ item.description }}
        </p>
      </article>
    </div>
  </section>
</template>

<script setup>
const { findOne } = useStrapi();

const { data } = await useAsyncData("block-features-main", () =>
  findOne("block-features-main", { populate: "*" })
);

const blockContent = computed(() => data.value?.data || {});
</script>
