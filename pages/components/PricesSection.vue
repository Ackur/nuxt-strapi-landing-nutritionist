<template>
  <section class="prices-section app-container">
    <article class="prices-section__heading text-center">
      <h1 class="app-section-title">Our Pricing</h1>
      <p class="app-section-description">
        We outline our flexible and affordable options to support you on your journey to optimal
        health and nutrition. We believe that everyone deserves access to personalized nutrition
        guidance and resources
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
      <span class="prices-section__content--offer-text">Save 50% on Yearly</span>
      <div class="prices-section__content--cards">
        <article class="cards-item">
          <header class="cards-item__header">
            <h1 class="cards-item__header--title">Basic Plan</h1>
            <p class="cards-item__header--tagline">Up to 50% off on Yearly Plan</p>
          </header>
          <section class="cards-item__content">
            <p class="cards-item__content--description">
              Get started on your health journey with our Basic Plan. It includes personalized
              nutrition coaching, access to our app, meal planning assistance, and email support.
            </p>
          </section>
          <div class="cards-item__price">
            <span class="cards-item__price--amount">
              <span class="monthly">$49</span>
              <span class="yearly">$294</span>
            </span>
            <span class="cards-item__price--period">
              <span class="monthly">/month</span>
              <span class="yearly">/year</span>
            </span>
          </div>
          <footer class="cards-item__footer">
            <AppButton type="button" class="cards-item__footer--action"> Choose Plan </AppButton>
          </footer>
        </article>
        <article class="cards-item">
          <header class="cards-item__header">
            <h1 class="cards-item__header--title">Premium Plan</h1>
            <p class="cards-item__header--tagline">Up to 50% off on Yearly Plan</p>
          </header>
          <section class="cards-item__content">
            <p class="cards-item__content--description">
              Upgrade to our Premium Plan for enhanced features. In addition to the Basic Plan,
              you'll receive video consultations, priority support, and personalized recipe
              recommendations.
            </p>
          </section>
          <div class="cards-item__price">
            <span class="cards-item__price--amount">
              <span class="monthly">$79</span>
              <span class="yearly">$474</span>
            </span>
            <span class="cards-item__price--period">
              <span class="monthly">/month</span>
              <span class="yearly">/year</span>
            </span>
          </div>
          <footer class="cards-item__footer">
            <AppButton type="button" class="cards-item__footer--action"> Choose Plan </AppButton>
          </footer>
        </article>
        <article class="cards-item">
          <header class="cards-item__header">
            <h1 class="cards-item__header--title">Ultimate Plan</h1>
            <p class="cards-item__header--tagline">Up to 50% off on Yearly Plan</p>
          </header>
          <section class="cards-item__content">
            <p class="cards-item__content--description">
              Experience the full benefits of personalized nutrition coaching with our Ultimate
              Plan. Enjoy all the features of the Premium Plan, along with 24/7 chat support and
              exclusive workshops.
            </p>
          </section>
          <div class="cards-item__price">
            <span class="cards-item__price--amount">
              <span class="monthly">$99</span>
              <span class="yearly">$594</span>
            </span>
            <span class="cards-item__price--period">
              <span class="monthly">/month</span>
              <span class="yearly">/year</span>
            </span>
          </div>
          <footer class="cards-item__footer">
            <AppButton type="button" class="cards-item__footer--action"> Choose Plan </AppButton>
          </footer>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import AppButton from "~/components/ui/AppButton.vue";
</script>
