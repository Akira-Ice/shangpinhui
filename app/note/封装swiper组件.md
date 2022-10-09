+ 将swiper封装成全局组件,数据通过props传递
  - @\components\Carousel\index.vue
    ```
    <template>
      <div class="swiper-container" ref="cur">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            v-for="carousel in carouselList"
            :key="carousel.id"
          >
            <img :src="carousel.imgUrl" />
          </div>
        </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
    </template>

    <script>
    import Swiper from "swiper";
    import "swiper/css/swiper.css";

    export default {
      name: "Carousel",
      props: ["carouselList"],
      data() {
        return {};
      },

      mounted() {},

      methods: {},

      watch: {
        carouselList: {
          immediate: true,
          handler() {
            this.$nextTick(() => {
              let mySwiper = new Swiper(this.$refs.cur, {
                loop: true, // 循环模式选项
                pagination: {
                  el: ".swiper-pagination",
                  clickable: true,
                },
                navigation: {
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                },
              });
            });
          },
        },
      },
    };
    </script>

    <style lang="scss" scoped></style>
    ```

+ usage
  ```
  <Carousel :carouselList="bannerList"/>
  ```
