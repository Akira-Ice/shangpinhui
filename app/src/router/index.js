import Vue from "vue";
import VueRouter from 'vue-router';
import routes from './routes';
import store from "@/store";

Vue.use(VueRouter);

let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;

VueRouter.prototype.push = function (location, resole, reject) {
  if (resole && reject) {
    originPush.call(this, location, resole, reject);
  } else {
    originPush.call(this, location, () => { }, () => { });
  }
}

VueRouter.prototype.replace = function (location, resole, reject) {
  if (resole && reject) {
    originReplace.call(this, location, resole, reject);
  } else {
    originReplace.call(this, location, () => { }, () => { });
  }
}

let router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

router.beforeEach(async (to, from, next) => {
  let token = store.state.user.token;
  let name = store.state.user.userInfo.name;

  //已登录
  if (token) {
    if (to.path === '/login') {
      next('/home');
    } else {
      //判断是否获取userInfo
      if (name) {
        next();
      } else {
        try {
          await store.dispatch('getUserInfo');
          next();
        } catch (error) {
          //token过期自动登出
          await store.dispatch('logout');
          next('/login');
        }
      }
    }
  } else {
    if (to.path === '/login' || to.path === '/home' || to.path === '/register') {
      next();
    } else {
      next('/login');
    }
  }
})

export default router;