+ 对于完成登录后,刷新页面,自动登出问题的解决
+ 首先,我们在登录的时候将获取到的token通过localStorage存储在内存中,并通过mutation修改存储于vuex
+ 但一旦在home页刷新后,token不再提交到mutation中,固然token变成none了,所以我们需要在state中直接获取localStorage中的token并赋值
+ 然后分别在Header Home Login中派发getUserInfo获取登陆信息(后面可以通过路由守卫进行派发,不用一个一个的写)
+ 对于getUserInfo中的请求,需要加上特殊的请求头,也就是token,获取方法有两种,一种是在state中获取,一种是直接在localStorage中获取
  - app\src\api\ajax.js
    ```
    //请求拦截器
    requests.interceptors.request.use((config) => {
      let uuid_token = store.state.detail.uuid_token;
      let token = localStorage.getItem("TOKEN") || store.state.user.token; //单用前面一个好像也可以
      console.log(token);
      if (token) {
        config.headers.token = token;
      } else if (uuid_token) {
        config.headers.userTempId = uuid_token;
      }

      nprogress.start()
      return config
    })
    ```