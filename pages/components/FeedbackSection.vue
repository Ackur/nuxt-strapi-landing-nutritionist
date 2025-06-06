<template>
  <section class="feedback-section app-container">
    <article class="feedback-section__heading text-center">
      <h1 class="app-section-title">Our Testimonials</h1>
      <p class="app-section-description">
        Our satisfied clients share their success stories and experiences on their journey to better
        health and well-being.
      </p>
    </article>
    <div data-slider class="feedback-section__cards">
      <div data-slider-content class="feedback-section__cards--content">
        <article data-slider-item class="feedback-section__cards--item">
          <div class="item-content">
            <svg width="40" height="40" class="item-content--icon">
              <use href="/images/icons/icons-symbol.svg#quotes-icon" />
            </svg>
            <p
              class="item-comment"
              title="I can't thank Nutritionist enough for their personalized nutrition coaching. It has completely transformed my approach to food and helped me shed those extra pounds. Highly recommended!"
            >
              I can't thank Nutritionist enough for their personalized nutrition coaching. It has
              completely transformed my approach to food and helped me shed those extra pounds.
              Highly recommended!
            </p>
          </div>
          <footer class="item-footer">
            <div class="item-author">
              <img
                src="/images/avatars/avatar-7-60.webp"
                alt="Jennifer Anderson"
                width="60"
                height="60"
                class="item-author--avatar"
              />
              <div class="item-author--info">
                <p class="item-author--name">Jennifer Anderson</p>
              </div>
            </div>
          </footer>
        </article>
        <article data-slider-item class="feedback-section__cards--item">
          <div class="item-content">
            <svg width="40" height="40" class="item-content--icon">
              <use href="/images/icons/icons-symbol.svg#quotes-icon" />
            </svg>
            <p class="item-comment">
              Nutritionist has been a game-changer for me. The expert guidance and support I
              received from their team made my weight loss journey so much easier. Thank you!
            </p>
          </div>
          <footer class="item-footer">
            <div class="item-author">
              <img
                src="/images/avatars/avatar-8-60.webp"
                alt="Robert Johnson"
                width="60"
                height="60"
                class="item-author--avatar"
              />
              <div class="item-author--info">
                <p class="item-author--name">Robert Johnson</p>
              </div>
            </div>
          </footer>
        </article>
        <article data-slider-item class="feedback-section__cards--item">
          <div class="item-content">
            <svg width="40" height="40" class="item-content--icon">
              <use href="/images/icons/icons-symbol.svg#quotes-icon" />
            </svg>
            <p class="item-comment">
              I had struggled with my weight for years until I found Nutritionist. Their
              personalized approach and tailored nutrition plan made all the difference. I've never
              felt better!
            </p>
          </div>
          <footer class="item-footer">
            <div class="item-author">
              <img
                src="/images/avatars/avatar-9-60.webp"
                alt="Emily Davis"
                width="60"
                height="60"
                class="item-author--avatar"
              />
              <div class="item-author--info">
                <p class="item-author--name">Emily Davis</p>
              </div>
            </div>
          </footer>
        </article>
      </div>
      <div class="feedback-section__cards--pagination">
        <AppButton
          outline
          type="button"
          aria-label="cards pagination left button"
          data-slider-control="prev"
          class="pagination-control"
        >
          <svg width="34" height="34" class="pagination-control--icon">
            <use href="/images/icons/icons-symbol.svg#arrow-left-simple-icon" />
          </svg>
        </AppButton>
        <ul data-slider-pagination class="pagination-list">
          <li class="pagination-list--item active" />
          <li class="pagination-list--item" />
          <li class="pagination-list--item" />
          <li class="pagination-list--item" />
          <li class="pagination-list--item" />
        </ul>
        <AppButton
          outline
          type="button"
          aria-label="cards pagination right button"
          data-slider-control="next"
          class="pagination-control"
        >
          <svg width="34" height="34" class="pagination-control--icon">
            <use href="/images/icons/icons-symbol.svg#arrow-right-simple-icon" />
          </svg>
        </AppButton>
      </div>
    </div>
  </section>
</template>

<script setup>
import AppButton from "~/components/ui/AppButton.vue";
</script>
