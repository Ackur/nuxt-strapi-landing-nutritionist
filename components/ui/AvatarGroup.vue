<template>
  <div class="avatar-group">
    <img
      v-for="image in props.images"
      :key="image.src"
      :src="mediaUrl + image.url"
      :width="image.width"
      :height="image.width"
      :alt="image.alternativeText"
      class="avatar-group--item"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  images: {
    type: Array,
    default: () => [
      {
        url: "/images/avatars/avatar-3-50.webp",
        width: "50",
        height: "50",
        alternativeText: "avatar"
      }
    ]
  }
});

const mediaUrl = useStrapiMedia();
</script>

<style>
.avatar-group {
  width: fit-content;
  display: flex;
  align-items: center;
  border: 1px solid var(--clr-green-70);
  border-radius: 35px;
  padding: 8px 10px;
  @media (max-width: 1770px) {
    padding: 6px 8px;
  }

  img {
    position: relative;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
    will-change: scale, z-index;
    transition: scale 0.3s;

    @media (max-width: 1770px) {
      width: 40px;
      height: 40px;
    }

    &:hover {
      scale: 1.05;
      z-index: 100;
    }

    &:not(:hover) {
      animation: zIndexHack 0.305s;
    }

    &:not(:first-child) {
      margin-left: -20px;
      @media (max-width: 1770px) {
        margin-left: -17px;
      }
    }
  }
}

@keyframes zIndexHack {
  0%,
  100% {
    z-index: 100;
  }
}
</style>
