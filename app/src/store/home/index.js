import {reqCategoryList} from '@/api';
import {reqBannerList} from '@/api';
import {reqFloorList} from '@/api';

const state = {
  categoryList: [],
  bannerList: [],
  floorList: [],
};
const mutations = {
  CATEGORYLIST(state,categoryList){
    state.categoryList = categoryList;
  },
  GETBANNERLIST(state,bannerList){
    state.bannerList = bannerList;
  },
  GETFLOORLIST(state,floorList){
    state.floorList = floorList;
  }
};
const actions = {
  async categoryList({commit}){
    let res = await reqCategoryList();
    if(res.code == 200){
      commit("CATEGORYLIST",res.data);
    }
  },

  async getBannerList({commit}){
    let res = await reqBannerList();
    if(res.code == 200){
      commit("GETBANNERLIST",res.data);
    }
  },

  async getFloorList({commit}){
    let res = await reqFloorList();
    if(res.code == 200){
      commit("GETFLOORLIST",res.data);
    }
  }

};
const getters = {};
export default {
  state,mutations,actions,getters
}
