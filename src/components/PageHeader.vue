<script setup>
import HeaderNav from './HeaderNav.vue'
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header__block">
        <div class="header__logo _show _light">
          <a href="" target="_self"><img src="@/assets/images/logo.png" alt="logo" /></a>
        </div>
        <div class="header__logo _dark">
          <a href="" target="_self"><img src="@/assets/images/logo_dark.png" alt="logo" /></a>
        </div>
        <HeaderNav />
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped></style>
