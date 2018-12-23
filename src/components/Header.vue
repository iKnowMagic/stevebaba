<template>
  <header role="banner" class="probootstrap-header">
    <div class="container-fluid">
      <router-link to="/" class="probootstrap-logo">Writer<span>.</span></router-link>

      <a href="#" class="probootstrap-burger-menu visible-xs"><i>Menu</i></a>
      <div class="mobile-menu-overlay"></div>

      <nav role="navigation" class="probootstrap-nav hidden-xs">
        <ul class="probootstrap-main-nav">
          <li><span class="link" v-scroll-to="{ el: '#books', duration: 1000 }">Books</span></li>
          <li><span class="link" v-scroll-to="{ el: '#about', duration: 1000 }">About Me</span></li>
          <li><span class="link" v-scroll-to="{ el: '#contact', duration: 1000 }">Contact</span></li>
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
          <a href="#" class="probootstrap-burger-menu"><i>Menu</i></a>
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
export default {}
</script>

<style scoped></style>
