<template>
  <div>
    <TypeNav/>
    <ListContainer/>
    <Recommend/>
    <Rank/>
    <Like/>
    <Floor v-for="list in floorList" :key="list.id" :list="list"></Floor>
    <Brand/>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ListContainer from '@/pages/Home/ListContainer';
import Recommend from '@/pages/Home/Recommend';
import Rank from '@/pages/Home/Rank';
import Like from '@/pages/Home/Like';
import Floor from '@/pages/Home/Floor';
import Brand from '@/pages/Home/Brand';

export default {
  name: 'Main',

  components:{
    ListContainer,Recommend,Rank,Like,Floor,Brand
  },
  data() {
    return {
      
    };
  },

  mounted() {
    this.$store.dispatch('getFloorList');
    this.$store.dispatch("getUserInfo");
  },

  methods: {
    
  },

  computed: {
    ...mapState({
      floorList: state => state.home.floorList
    }),
  }
};
</script>

<style lang="scss" scoped>

</style>