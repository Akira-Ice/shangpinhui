+ 使用封装后的axios,进程异步问题
+ async 标识函数体中await标识的部分优先执行
+ 方法加上async,返回的一定是一个Promise
  - @/store/home/index.js
    ```
    const actions = {
      async categoryList({commit}){
        let res = await reqCategoryList();
        if(res.code == 200){
          commit("CATEGORYLIST",res.data)
        }
      }
    };
    ```
