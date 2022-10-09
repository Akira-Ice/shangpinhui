+ 多次push警告问题
+ push是一个promise，promise需要传递成功和失败两个参数，我们的push中没有传递。
  - @router/index.js
    ```
    let originPush = VueRouter.prototype.push
    let originReplace = VueRouter.prototype.replace

    VueRouter.prototype.push = function(location,resole,reject){
      if(resole && reject){
        originPush.call(this,location,resole,reject)
      }else{
        originPush.call(this,location,()=>{},()=>{})
      }
    }

    VueRouter.prototype.replace = function(location,resole,reject){
      if(resole && reject){
        originReplace.call(this,location,resole,reject)
      }else{
        originReplace.call(this,location,()=>{},()=>{})
      }
    }
    ```
