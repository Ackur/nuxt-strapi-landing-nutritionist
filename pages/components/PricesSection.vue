<template>
  <section class="prices-section app-container">
    <article class="prices-section__heading text-center">
      <h1 class="app-section-title">{{ blockContent.title }}</h1>
      <p class="app-section-description">
        {{ blockContent.description }}
      </p>
    </article>
    <div class="prices-section__content">
      <div class="toggle-buttons prices-section__content--toggle">
        <label class="toggle-buttons--item">
          Monthly
          <input type="radio" name="toggle" value="monthly" checked />
        </label>
        <label class="toggle-buttons--item">
          Yearly
          <input type="radio" name="toggle" value="yearly" />
        </label>
      </div>
      <span class="prices-section__content--offer-text">{{ blockContent.subtitle }}</span>
      <div class="prices-section__content--cards">
        <article v-for="plan in blockContent.plans" :key="plan.id" class="cards-item">
          <header class="cards-item__header">
            <h1 class="cards-item__header--title">{{ plan.title }}</h1>
            <p class="cards-item__header--tagline">{{ plan.subtitle }}</p>
          </header>
          <section class="cards-item__content">
            <p class="cards-item__content--description">
              {{ plan.description }}
            </p>
          </section>
          <div class="cards-item__price">
            <span class="cards-item__price--amount">
              <span class="monthly">${{ plan.monthly }}</span>
              <span class="yearly">${{ plan.yearly }}</span>
            </span>
            <span class="cards-item__price--period">
              <span class="monthly">/month</span>
              <span class="yearly">/year</span>
            </span>
          </div>
          <footer class="cards-item__footer">
            <AppButton
              type="button"
              class="cards-item__footer--action"
              @click="console.log(plan.title, 'clicked')"
            >
              Choose Plan
            </AppButton>
          </footer>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import AppButton from "~/components/ui/AppButton.vue";

const { findOne } = useStrapi();

const { data } = await useAsyncData("block-pricing-main", () =>
  findOne("block-pricing-main", { populate: "*" })
);

const blockContent = computed(() => data.value?.data || {});
</script>
