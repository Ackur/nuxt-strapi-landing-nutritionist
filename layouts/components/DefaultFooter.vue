<template>
  <footer class="app-footer">
    <div class="app-footer--content">
      <div class="app-navbar">
        <picture class="app-navbar__logo">
          <img
            src="/images/logo-primary.svg"
            width="148"
            height="35"
            alt="Nutrition logo"
            class="app-navbar__logo--image"
          />
        </picture>
        <nav aria-label="Footer Navigation">
          <ul class="app-navbar__list">
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
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>

        <button class="app-button-top" @click="goToTop">
          Got To Top
          <div class="app-button-top--icon-container">
            <svg width="34" height="34" class="app-button-top--icon">
              <use href="/images/icons/icons-symbol.svg#arrow-top-icon" />
            </svg>
          </div>
        </button>
      </div>

      <div class="app-footer__bottom">
        <div class="app-footer__contacts">
          <ul class="app-footer__contacts--list">
            <li class="list-item">
              <a href="mailto:hello@squareup.com" class="list-item__link">
                <svg width="24" height="25" class="list-item__link--icon">
                  <use href="/images/icons/icons-symbol.svg#mail-icon" />
                </svg>
                hello@squareup.com
              </a>
            </li>
            <li class="list-item">
              <a href="tel:+91 91813 23 2309" class="list-item__link">
                <svg width="24" height="25" class="list-item__link--icon">
                  <use href="/images/icons/icons-symbol.svg#phone-icon" />
                </svg>
                +91 91813 23 2309
              </a>
            </li>
            <li class="list-item">
              <a href="tel:+91 91813 23 2309" class="list-item__link">
                <svg width="24" height="25" class="list-item__link--icon">
                  <use href="/images/icons/icons-symbol.svg#location-icon" />
                </svg>
                Somewhere in the World
              </a>
            </li>
          </ul>
        </div>
        <div class="app-footer__copyright">
          <p>© 2025 Nutritionist. All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
function goToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
</script>
