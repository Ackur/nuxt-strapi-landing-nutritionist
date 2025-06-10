<template>
  <section class="hero-section app-container-lg">
    <picture class="hero-section__picture">
      <template v-for="image in blockContent.images" :key="image.id">
        <source
          v-if="image.mediaQuery"
          :media="image.mediaQuery"
          :srcset="mediaUrl + image.file.url"
          :width="image.file.width"
          :height="image.file.height"
        />
        <img
          v-else
          :src="mediaUrl + image.file.url"
          :width="image.file.width"
          :height="image.file.height"
          :alt="image.file.alternativeText"
          class="hero-section__picture--image"
        />
      </template>
    </picture>
    <div class="hero-section__content">
      <article class="hero-section__content--container">
        <p class="content-subtitle">{{ blockContent.subtitle }}</p>
        <h1 class="content-title">{{ blockContent.title }}</h1>
        <p class="content-description">
          {{ blockContent.description }}
        </p>
        <div class="content-actions">
          <AppButton
            v-for="action in blockContent.actions"
            :key="action.id"
            :as="action.as"
            :outline="action.outline"
            v-bind="{ ...action.attrs }"
            class="content-actions--item"
          >
            {{ action.text }}
          </AppButton>
        </div>
        <aside class="content-tags">
          <AvatarGroup :images="blockContent.avatars" class="avatar-group" />
          <span class="content-tags--label">
            <span>{{ blockContent.avatarsSubtitle }}</span> {{ blockContent.avatarsTitle }}
          </span>
        </aside>
      </article>
    </div>
  </section>
</template>

<script setup>
import AppButton from "~/components/ui/AppButton.vue";
import AvatarGroup from "~/components/ui/AvatarGroup.vue";

const { findOne } = useStrapi();

const mediaUrl = useStrapiMedia();

const { data, error } = await useAsyncData("hero", () =>
  findOne("hero", {
    populate: {
      avatars: {
        populate: "*"
      },
      actions: {
        populate: "*"
      },
      images: {
        populate: { file: { fields: ["url", "width", "height", "alternativeText"] } }
      }
    }
  })
);

const blockContent = computed(() => data.value?.data || {});
</script>
