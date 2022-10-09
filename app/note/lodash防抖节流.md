+ lodash.js
+ https://www.lodashjs.com/

+ 防抖 用户操作很频繁，但是只执行一次，减少业务负担。
  _.debounce(func, [wait=0], [options=])
+ 节流 用户操作很频繁，但是把频繁的操作变为少量的操作，使浏览器有充分时间解析代码
  _.throttle(func, [wait=0], [options=])

+ 事件高频触发,性能下降,卡顿
  - @/components/TypeNav/index.vue
    ```
    methods: {
      changeIndex: _.throttle(function (index) {
        this.currentIndex = index;
      }, 50),
    }
    ```