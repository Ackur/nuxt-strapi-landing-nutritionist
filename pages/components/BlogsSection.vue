<template>
  <section class="blogs-section app-container">
    <article class="blogs-section__heading text-center">
      <h1 class="app-section-title">{{ blockContent.title }}</h1>
      <p class="app-section-description">
        {{ blockContent.description }}
      </p>
    </article>
    <div class="blogs-section__cards">
      <article v-for="blog in blockContent.blogs" :key="blog.id" class="app-card-blog">
        <div class="app-card-blog__content">
          <figure class="app-card-blog__content--image-container">
            <img
              :src="mediaUrl + blog.image.url"
              :alt="blog.image.alternativeText"
              :width="blog.image.width"
              :height="blog.image.height"
              class="app-card-blog__content--image"
            />
          </figure>
          <span class="app-card-blog__content--category">{{ blog.category }}</span>
          <h2 class="app-card-blog__content--title">
            <a href="#" class="app-card-blog__content--title-link">
              {{ blog.title }}
            </a>
          </h2>
          <p class="app-card-blog__content--description">
            {{ blog.description }}
          </p>
        </div>
        <footer>
          <div class="app-card-blog__author-info">
            <img
              :src="mediaUrl + blog.author.avatar.url"
              :alt="blog.author.avatar.alternativeText"
              :width="blog.author.avatar.width"
              :height="blog.author.avatar.height"
              class="app-card-blog__author-info--avatar"
            />
            <div>
              <p class="app-card-blog__author-info--name">{{ blog.author.name }}</p>
              <time datetime="2023-05-23" class="app-card-blog__author-info--date">
                {{ formatDate(blog.updatedAt) }} - {{ blog.readingTime }} min read
              </time>
            </div>
            <div class="app-card-blog__author-info--actions">
              <AppButton
                outline
                type="button"
                aria-label="Add to favorites"
                class="actions-item"
                @click="console.log('author', blog.author.name, 'added to favorites')"
              >
                <svg width="24" height="24" class="actions-item--icon">
                  <use href="/images/icons/icons-symbol.svg#heart-icon" />
                </svg>
              </AppButton>
              <AppButton
                outline
                type="button"
                aria-label="Save article"
                class="actions-item"
                @click="console.log('blog', `'${blog.title}'`, 'saved')"
              >
                <svg width="24" height="24" class="actions-item--icon">
                  <use href="/images/icons/icons-symbol.svg#bookmark-icon" />
                </svg>
              </AppButton>
            </div>
          </div>
        </footer>
      </article>
    </div>
  </section>
</template>

<script setup>
import AppButton from "~/components/ui/AppButton.vue";
import { formatDate } from "~/utils/dateFormat";

const { findOne } = useStrapi();

const mediaUrl = useStrapiMedia();

const { data } = await useAsyncData("block-blogs-main", () =>
  findOne("block-blogs-main", {
    populate: {
      blogs: {
        populate: {
          author: {
            populate: "avatar"
          },
          image: {
            populate: "*"
          }
        }
      }
    }
  })
);

const blockContent = computed(() => data.value?.data || {});
</script>
