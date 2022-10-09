+ swiper
+ npm install --save swiper@5
+ https://www.swiper.com.cn/usage/index.html
+ 由于在创建swiper实例时需要传入dom元素,官方给出的是一个固定的class,但当页面出现多个轮播图时,会导致多个轮播图使用同一数据,所以我们采用ref来标识
  因数据是通过ajax进行异步获取的,而dom元素是根据获取的数据进行生成的,固然不能直接在mounted中创建实例,所以我们通过watch监测所获取的属性并需要结合nexTick(将回调延迟到下一次DOM更新循环之后执行)来完成
+ usage
  - @\pages\Home\ListContainer\index.vue
    ```
    import Swiper from "swiper";
    import "swiper/css/swiper.css";

    watch: {
      bannerList(newValue, oldValue) {
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
    }
    ```
