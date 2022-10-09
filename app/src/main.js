import Vue from 'vue'
import App from './App.vue'
import router from '@/router';
import store from './store';
import '@/mock/mockServer';

import TypeNav from '@/components/TypeNav';
import Carousel from '@/components/Carousel';
import Pagination from '@/components/Pagination';

Vue.config.productionTip = false
Vue.component(TypeNav.name,TypeNav);
Vue.component(Carousel.name,Carousel);
Vue.component(Pagination.name,Pagination);

new Vue({
  beforeCreate(){
    Vue.prototype.$bus = this;
  },
  render: h => h(App),
  router,
  store
}).$mount('#app')
