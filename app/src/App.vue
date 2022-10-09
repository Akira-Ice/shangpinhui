<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name: '',

  components:{
    Header,Footer
  },

  data() {
    return {
      
    };
  },

  mounted() {
    //home
    this.$store.dispatch("categoryList");
  },

  methods: {
    
  },
};
</script>

<style lang="scss" scoped>

</style>