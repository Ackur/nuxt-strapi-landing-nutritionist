<template>
  <header class="app-header">
    <div class="app-header__top">
      <div class="baner">
        <div class="baner--backgraund" />
        <a href="#" class="baner__link">
          <svg width="22" height="22" class="baner__link--icon prepend">
            <use href="/images/icons/icons-symbol.svg#ball-icon" />
          </svg>
          <span>Join Our Personalized Nutrition Demo For Free</span>
          <svg width="24" height="24" class="baner__link--icon append">
            <use href="/images/icons/icons-symbol.svg#arrow-right-icon" />
          </svg>
        </a>
      </div>
    </div>
    <div class="app-header__bottom">
      <div class="app-navbar">
        <figure class="app-navbar__logo">
          <img
            src="/images/logo-primary.svg"
            width="148"
            height="35"
            alt="Nutrition logo"
            class="app-navbar__logo--image"
          />
        </figure>
        <nav
          :ref="(el) => (refs.mobileMenu = el)"
          aria-label="Main Navigation"
          data-menu-backdrop
          class="app-navbar__list--wrapper mobile-menu"
          @click="toggleMobileMenu"
        >
          <ul class="app-navbar__list" @click.stop>
            <li class="app-navbar__list--item active">
              <a href="#">Home</a>
            </li>
            <li class="app-navbar__list--item">
              <a href="#">About</a>
            </li>
            <li class="app-navbar__list--item">
              <a href="#">Team</a>
            </li>
            <li class="app-navbar__list--item">
              <a href="#">Process</a>
            </li>
            <li class="app-navbar__list--item">
              <a href="#">Pricing</a>
            </li>
            <li class="app-navbar__list--item">
              <a href="#">Blog</a>
            </li>
            <li class="app-navbar__list--item">
              <AppButton as="a" href="#"> Contact Us </AppButton>
            </li>
          </ul>
        </nav>

        <button class="mobile-menu-button" aria-label="mobile menu" @click="toggleMobileMenu">
          <div class="mobile-menu-button__burger">
            <span class="mobile-menu-button__burger--item" />
            <span class="mobile-menu-button__burger--item" />
            <span class="mobile-menu-button__burger--item" />
          </div>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import AppButton from "~/components/ui/AppButton.vue";

const screenWidth = useScreenWidth();

const refs = reactive({});
const mobileScreenWidth = "768px";

const isMobileScreenWidth = computed(() => {
  return screenWidth.value <= parseInt(mobileScreenWidth);
});

function toggleMobileMenu() {
  const isActive = refs.mobileMenu.classList.toggle("open");

  if (!isActive) {
    refs.mobileMenu.classList.add("close");
  } else {
    refs.mobileMenu.classList.remove("close");
  }
}

watch(isMobileScreenWidth, (newValue) => {
  if (!newValue) {
    refs.mobileMenu.classList.remove("open", "close");
  }
});
</script>
