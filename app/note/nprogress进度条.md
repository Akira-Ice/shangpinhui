+ 安装nprogress
+ cnpm install --save nprogress
+ https://www.npmjs.com/package/nprogress

- @/api/request.js
  ```
  import nprogress from "nprogress";
  import "nprogress/nprogress.css";

  nprogress.start();
  nprogress.done();
  ```