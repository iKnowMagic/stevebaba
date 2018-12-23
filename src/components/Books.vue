<template>
  <section class="probootstrap-section" id="books">
    <div class="container">
      <div class="row">
        <div class="col-md-12 probootstrap-relative">
          <h2 class="probootstrap-heading mt0 mb50">My Books</h2>
          <ul class="probootstrap-owl-navigation absolute right"></ul>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 probootstrap-relative">
          <carousel
            class="owl-carousel-carousel"
            dotsContainer="false"
            navContainer=".probootstrap-owl-navigation"
            :navText="[prevItem, nextItem]"
            :loop="true"
            :smartSpeed="800"
            :responsive="{
              0: {
                items: 1
              },
              400: {
                items: 1
              },
              600: {
                items: 2
              },
              1000: {
                items: 3
              }
            }"
          >
            <div class="item">
              <div class="probootstrap-program">
                <a href="#"
                  ><img
                    src="@/assets/img/img_1.jpg"
                    alt="Free Bootstrap Template by uicookies.com"
                    class="img-responsive img-rounded"
                /></a>
                <h3>First Book</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
            <div class="item">
              <div class="probootstrap-program">
                <a href="#"
                  ><img
                    src="@/assets/img/img_2.jpg"
                    alt="Free Bootstrap Template by uicookies.com"
                    class="img-responsive img-rounded"
                /></a>
                <h3>Second Book</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
            <div class="item">
              <div class="probootstrap-program">
                <a href="#"
                  ><img
                    src="@/assets/img/img_3.jpg"
                    alt="Free Bootstrap Template by uicookies.com"
                    class="img-responsive img-rounded"
                /></a>
                <h3>Third Book</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
            <div class="item">
              <div class="probootstrap-program">
                <a href="#"
                  ><img
                    src="@/assets/img/img_4.jpg"
                    alt="Free Bootstrap Template by uicookies.com"
                    class="img-responsive img-rounded"
                /></a>
                <h3>Fourth Book</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
            <div class="item">
              <div class="probootstrap-program">
                <a href="#"
                  ><img
                    src="@/assets/img/img_5.jpg"
                    alt="Free Bootstrap Template by uicookies.com"
                    class="img-responsive img-rounded"
                /></a>
                <h3>Fifth Book</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
            <div class="item">
              <div class="probootstrap-program">
                <a href="#"
                  ><img
                    src="@/assets/img/img_6.jpg"
                    alt="Free Bootstrap Template by uicookies.com"
                    class="img-responsive img-rounded"
                /></a>
                <h3>Sixth Book</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
            <div class="item">
              <div class="probootstrap-program">
                <a href="#"
                  ><img
                    src="@/assets/img/img_7.jpg"
                    alt="Free Bootstrap Template by uicookies.com"
                    class="img-responsive img-rounded"
                /></a>
                <h3>Seventh Book</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </carousel>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import carousel from 'vue-owl-carousel'

export default {
  components: {
    carousel
  },
  data() {
    return {
      prevItem: `
      <li>
     <span class="probootstrap-owl-prev"><i class="icon-chevron-left"></i></span>
      </li>
      `,
      nextItem: `
      <li>
      <span class="probootstrap-owl-next"><i class="icon-chevron-right"></i></span>
      </li>
      `
    }
  },
  mounted() {}
}
</script>

<style scoped></style>
