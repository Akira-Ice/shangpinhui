+ 本地存储
+ 存储对象是要通过JSON转化后再存储
+ sessionStorage.setItem("skuInfo",JSON.stringify(this.skuInfo));
+ JSON.parse(sessionStorage.getItem("skuInfo"));