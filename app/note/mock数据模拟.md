+ mockjs数据模拟
+ cnpm install --save mockjs
  - @/mock/banner.json
    ```
    [
      {
        "id": "1",
        "imgUrl": "/images/banner1.jpg"
      },
      {
        "id": "2",
        "imgUrl": "/images/banner2.jpg"
      },
      {
        "id": "3",
        "imgUrl": "/images/banner3.jpg"
      },
      {
        "id": "4",
        "imgUrl": "/images/banner4.jpg"
      }
    ]
    ```

  - @/mock/mockServer.js
    ```
    import Mock from 'mockjs';

    import banner from './banner.json';
    import floor from './floor.json';

    Mock.mock('/mock/banner',{code: 200, data: banner});
    Mock.mock('/mock/floor',{code: 200, data: floor});
    ```

  + 由于这里的数据请求的地址为mock路径下的,所以前面封装的axios要加一个新的,修改路径
  - @/api/mockAjax.js
    ```
    import axios from "axios";
    import nprogress from "nprogress";
    import "nprogress/nprogress.css";

    const requests = axios.create({
      baseURL: "/mock",
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

    + 将新的请求函数reqBannerList()暴露导出,使用参考'封装axios.md'
    - @/api/index.js
      ```
      import mockRequests from "./mockAjax";

      //pages/Home/ListContainer/ 轮播数据 mock 模拟
      export const reqBannerList = () => mockRequests({url:'/banner',method:'get'});
      ```




