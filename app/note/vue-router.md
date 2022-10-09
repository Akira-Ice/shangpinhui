+ 安装vue-router
+ npm install --save vue-router

+ 路由组件
  - @/pages/xxx/index.vue

+ 路由配置
  - @/router/index.js
    ```
    import Vue from "vue";
    import VueRouter from 'vue-router';

    Vue.use(VueRouter);

    import Home from '@/pages/Home'
    import Login from '@/pages/Login'
    import Search from '@/pages/Search'
    import Register from '@/pages/Register'

    export default new VueRouter({
      routes: [
        {
          path: "/home",
          component: Home,
          meta: { show: true }
        },
        {
          path: "/search/:keyword?",
          component: Search,
          meta: { show: true },
          name: "search",
          props: ($route) => ({keyword:$route.query.keyword})
        },
        {
          path: "/login",
          component: Login,
          meta: { show: false }
        },
        {
          path: "/register",
          component: Register,
          meta: { show: false }
        },
        {
          path: "*",
          redirect: "/home"
        }
      ]
    })
    ```

+ 注册路由
  - app/main.js
    ```
    import router from '@/router';

    new Vue({
      render: h => h(App),
      router,
    }).$mount('#app')
    ```

+ 所有的路由和非路由组件身上都会拥有$router $route属性
  + $router：一般进行编程式导航进行路由跳转
  + $route： 一般获取路由信息（name path params等）

+ 路由跳转方式
+ 声明式导航router-link标签 ,可以把router-link理解为一个a标签，它 也可以加class修饰
+ 编程式导航 ：声明式导航能做的编程式都能做，而且还可以处理一些业务
  + push replace

+ 路由传参
  + query 
    + 不属于路径当中的一部分，类似于get请求，地址栏表现为 /search?k1=v1&k2=v2
    + 对应的路由信息 path: "/search" 
  + params
    + 属于路径当中的一部分，需要注意，在配置路由的时候，需要占位 ,地址栏表现为 /search/v1/v2
    + 对应的路由信息要修改为path: "/search/:keyword" 这里的/:keyword就是一个params参数的占位符
    + 占位符后加?可表示改参数可不传
    + 加?后若传递空串,通过undefined解决
    + this.$router.push({name:"Search",query:{keyword:this.keyword},params:{keyword:''||undefined}})



