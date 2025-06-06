<template>
  <section class="hero-section app-container-lg">
    <picture class="hero-section__picture">
      <source
        media="(max-width: 768px)"
        srcset="/images/pages/home/hero-image-390px.webp"
        width="390"
        height="374"
      />
      <source
        media="(max-width: 1770px)"
        srcset="/images/pages/home/hero-image-710px.webp"
        width="710"
        height="712"
      />
      <img
        src="/images/pages/home/hero-image-949px.webp"
        width="970"
        height="850"
        alt="Nutritionist hero"
        class="hero-section__picture--image"
      />
    </picture>
    <div class="hero-section__content">
      <article class="hero-section__content--container">
        <p class="content-subtitle">Transform Your ❤️ Health with</p>
        <h1 class="content-title">Personalized Nutrition Coaching</h1>
        <p class="content-description">
          Welcome to Nutritionist, your partner in achieving optimal health through personalized
          nutrition coaching. Our certified nutritionists are here to guide you on your weight loss
          journey, providing customized plans and ongoing support. Start your transformation today
          and experience the power of personalized nutrition coaching.
        </p>
        <div class="content-actions">
          <AppButton class="content-actions--item"> Get Starter Today </AppButton>
          <AppButton outline class="content-actions--item"> Book a Demo </AppButton>
        </div>
        <aside class="content-tags">
          <div class="avatar-group">
            <img
              src="/images/avatars/avatar-1-50.webp"
              width="50"
              height="50"
              alt="avatar"
              class="avatar-group--item"
            />
            <img
              src="/images/avatars/avatar-2-50.webp"
              width="50"
              height="50"
              alt="avatar"
              class="avatar-group--item"
            />
            <img
              src="/images/avatars/avatar-3-50.webp"
              width="50"
              height="50"
              alt="avatar"
              class="avatar-group--item"
            />
          </div>
          <span class="content-tags--label"><span>430+</span> Happy Customers</span>
        </aside>
      </article>
    </div>
  </section>
</template>

<script setup>
import AppButton from "~/components/ui/AppButton.vue";
</script>
