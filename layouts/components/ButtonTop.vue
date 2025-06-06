<template>
  <button
    :ref="(el) => (refs.button = el)"
    class="app-button-top"
    aria-label="button top"
    :hidden="!isVisible"
    :style="{ '--_scroll-persentage': scrollPersentage + '%' }"
    @click="goToTop"
  >
    <div class="app-button-top--icon-container">
      <svg width="34" height="34" class="app-button-top--icon">
        <use href="/images/icons/icons-symbol.svg#arrow-top-icon" />
      </svg>
    </div>
  </button>
</template>

<script setup>
const props = defineProps({
  offsetTop: { type: Number, default: 0 },
  offsetBottom: { type: Number, default: 100 }
});

const refs = reactive({});
const scrollPersentage = ref(0);

const isVisible = computed(() => {
  return scrollPersentage.value >= props.offsetTop && scrollPersentage.value <= props.offsetBottom;
});

function goToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function getScrollPersentage() {
  const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
  const offsetHeight = document.body.offsetHeight || document.documentElement.offsetHeight;
  const clientHeight = document.documentElement.clientHeight;
  scrollPersentage.value = Math.floor((scrollTop / (offsetHeight - clientHeight)) * 100);
}

function init() {
  window.addEventListener("scroll", getScrollPersentage);
  getScrollPersentage();
}

function destroy() {
  window.removeEventListener("scroll", getScrollPersentage);
}

onMounted(init);
onUnmounted(destroy);
</script>
