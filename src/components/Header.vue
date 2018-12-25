<template>
  <header role="banner" class="probootstrap-header">
    <div
      class="container-fluid"
      :class="{ 'probootstrap-mobile-menu-active': $mq === 'sm' || $mq === 'xs', show: menuOpen }"
    >
      <router-link to="/" class="probootstrap-logo">Writer<span>.</span></router-link>

      <div class="probootstrap-burger-menu visible-xs link" @click="toggleMenu"><i>Menu</i></div>
      <div class="mobile-menu-overlay" @click="toggleMenu"></div>

      <nav role="navigation" class="probootstrap-nav hidden-xs">
        <ul class="probootstrap-main-nav">
          <li><span class="link" v-scroll-to="{ el: '#books', duration: 1000, onStart: closeMenu }">Books</span></li>
          <li><span class="link" v-scroll-to="{ el: '#about', duration: 1000, onStart: closeMenu }">About Me</span></li>
          <li>
            <span class="link" v-scroll-to="{ el: '#contact', duration: 1000, onStart: closeMenu }">Contact</span>
          </li>
        </ul>
        <ul class="probootstrap-header-social hidden-xs">
          <li>
            <a href="#"><i class="icon-twitter"></i></a>
          </li>
          <li>
            <a href="#"><i class="icon-facebook2"></i></a>
          </li>
          <li>
            <a href="#"><i class="icon-instagram2"></i></a>
          </li>
        </ul>
        <div class="extra-text visible-xs">
          <div class="probootstrap-burger-menu link" @click="toggleMenu"><i>Menu</i></div>
          <h5>Connect With Me</h5>
          <ul class="social-buttons">
            <li>
              <a href="#"><i class="icon-twitter"></i></a>
            </li>
            <li>
              <a href="#"><i class="icon-facebook2"></i></a>
            </li>
            <li>
              <a href="#"><i class="icon-instagram2"></i></a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    },
    closeMenu() {
      this.menuOpen = false
    }
  }
}
</script>

<style scoped></style>
