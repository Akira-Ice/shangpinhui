+ https://router.vuejs.org/zh/guide/advanced/scroll-behavior.html
+ 使用前端路由，当切换到新路由时，想要页面滚到顶部，或者是保持原先的滚动位置，就像重新加载页面那样
+ useage
  - app\src\router\index.js
    ```
    export default new VueRouter({
      routes,
      scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
          return savedPosition
        } else {
          return { x: 0, y: 0 }
        }
      }
    })
    ```