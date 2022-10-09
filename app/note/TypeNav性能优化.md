+ /home,/search中均使用到<TypeNav/>组件,但是再路由跳转的过程中会销毁对应的路由,因而TypeNav通过axios获取的数据需亚再次请求
  固然可以在跟组件App.vue中进行请求仓库获取数据
  - app/App.vue
    ```
    mounted() {
      this.$store.dispatch("categoryList");
    },
    ```
