<template>
  <component :is="props.as" class="app-button" :class="{ outline: props.outline }">
    <slot />
  </component>
</template>

<script setup>
const props = defineProps({
  as: {
    type: String,
    default: "button",
    validator: (value) => ["button", "a", "nuxt-link"].includes(value)
  },
  outline: Boolean
});
</script>

<style>
.app-button {
  min-height: 55px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: var(--clr-grey-15);
  background-color: var(--clr-green-70);
  border: 1px solid transparent;
  border-radius: 5px;
  text-align: center;
  text-decoration: none;
  padding: 10px 24px;
  transition: background-color 0.3s ease;
  @media (max-width: 1770px) {
    min-height: 45px;
    padding: 10px 16px;
  }

  &:hover:not(.outline) {
    background-image: url(/images/icons/abstract-1-icon.svg);
    background-color: var(--clr-green-85);
    background-size: contain;
  }

  &.outline {
    border-color: var(--clr-green-85);
    background-color: var(--clr-green-95);

    &:hover {
      border-color: var(--clr-green-75);
      background-color: var(--clr-green-85);
    }
  }
}
</style>
