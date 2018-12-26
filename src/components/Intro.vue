<template>
  <section class="probootstrap-intro">
    <div class="container">
      <div class="row">
        <div class="col-md-7 probootstrap-intro-text">
          <h1 class="probootstrap-animate fadeIn probootstrap-animated" data-animate-effect="fadeIn">
            <span>Steve</span> Baba
          </h1>
          <div
            class="probootstrap-subtitle probootstrap-animate fadeIn probootstrap-animated"
            data-animate-effect="fadeIn"
          >
            <h2>Poetry Writer</h2>
          </div>
        </div>
      </div>
    </div>
    <span class="probootstrap-animate fadeInUp probootstrap-animated link">
      <div v-scroll-to="{ el: '#about', duration: 1000 }" class="probootstrap-scroll-down js-next">
        Scroll down <i class="icon-chevron-down"></i>
      </div>
    </span>
  </section>
</template>

<script>
import { jarallax } from 'jarallax'

export default {
  mounted() {
    jarallax(document.querySelectorAll('.probootstrap-intro'), {
      speed: 0.2
    })
  }
}
</script>

<style scoped>
.probootstrap-intro {
  background-image: url('~@/assets/img/demo/hero_bg_1_b.jpg');
  background-position: 0 0;
}
</style>
