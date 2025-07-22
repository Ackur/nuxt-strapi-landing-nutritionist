import { ref } from "vue";

export const useScreenWidth = () => {
  const width = ref(window?.innerWidth);

  function updateWidth() {
    width.value = window?.innerWidth;
  }

  window?.addEventListener("resize", updateWidth);
  updateWidth();

  return width;
};
