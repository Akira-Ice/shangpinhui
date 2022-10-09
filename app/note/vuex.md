+ 安装vuex
+ npm install --save vuex
+ vue组件数据仓库
+ https://vuex.vuejs.org/zh/

+ store
  - @/store/home/index.js
    ```
    const state = {};
    const mutations = {};
    const actions = {};
    const getters = {};

    export default {
      state,mutations,actions,getters
    }
    ```

  - @/store/index.js
    ```
    import Vue from "vue";
    import Vuex from "vuex";

    Vue.use(Vuex);

    import home from './home';
    import search from './search'

    export default new Vuex.Store({
      //仓库模块化
      modules:{
        home,search
      }
    })
    ```

    - app/main.js
      ```
      import store from './store';
      new Vue({
        render: h => h(App),
        router,
        store
      }).$mount('#app')
      ```

  + usage
    - @/xxx.vue
      ```
      <script>
      import { mapState } from "vuex";
      export default {
        name: "",

        data() {
          return {};
        },

        mounted() {
          this.$store.dispatch('getBannerList');
        },

        methods: {},
        
        computed: {
          ...mapState({
            bannerList: (state) => state.home.bannerList,
          }),
        }
      };
      </script>
      ```







