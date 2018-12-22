<template>
  <section class="probootstrap-intro" data-stellar-background-ratio="0.5">
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
      <div class="probootstrap-scroll-down js-next" v-scroll-to="{ el: '#about', duration: 1000 }">
        Scroll down <i class="icon-chevron-down"></i>
      </div>
    </span>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
.probootstrap-intro {
  background-image: url('~@/assets/img/demo/hero_bg_1_b.jpg');
  background-position: 0 0;
}
</style>
