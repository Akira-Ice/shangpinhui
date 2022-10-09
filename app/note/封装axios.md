+ 安装axios
+ cnpm install --save axios
+ https://www.axios-http.cn/

+ 封装axios
  - @/api/ajax.js
    ```
    import axios from "axios";
    import nprogress from "nprogress";
    import "nprogress/nprogress.css";

    const requests = axios.create({
      baseURL: "/api",
      timeout: 5000
    })

    //请求拦截器
    requests.interceptors.request.use((config)=>{
      nprogress.start()
      return config
    })

    //响应拦截器
    requests.interceptors.response.use((res)=>{
      nprogress.done()
      return res.data
    },(error)=>{
      console.log(error)
      return Promise.reject(new Error("faild"))
    })

    export default requests;
    ```
    
+ 接口统一封装
  - @/api/index.js
    ```
    import requests from "./ajax";
    export const reqCategoryList = () => requests({url:'/product/getBaseCategoryList',method:'get'})
    //export const reqCategoryList = () => requests.get('/product/getBaseCategoryList')
    ```

+ usage
  ```
  import {reqCateGoryList} from './api'
  reqCateGoryList(); 
  ```