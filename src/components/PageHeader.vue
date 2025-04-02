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

<style lang="scss" scoped>
.header {
  width: 100%;
  margin: 0 auto;
  background-color: #ffffff;
}
.header__block {
  height: 70px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 0;
  left: 0;
  padding: 0 10px;
}
.header__logo img {
  width: 85px;
}
</style>
