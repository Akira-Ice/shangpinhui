import { reqDetailInfo,reqAddShopCar } from '@/api'
import { getUUID } from '@/util/uuid_token';

const state = {
  detailInfo: {},
  uuid_token: getUUID()
};

const mutations = {
  GETDETAILINFO(state, detailInfo) {
    state.detailInfo = detailInfo;
  }
};

const actions = {
  async getDetailInfo({ commit }, skuId) {
    let res = await reqDetailInfo(skuId);
    if (res.code === 200) {
      commit('GETDETAILINFO', res.data);
    }
  },
  async AddShopCar({commit},{skuId,skuNum}){
    let res = await reqAddShopCar(skuId,skuNum);
    if(res.code === 200){
      return 'ok';
    }else{
      return Promise.reject(new Error('faile'));
    }
  }
};
const getters = {
  categoryView(state) {
    return state.detailInfo.categoryView || {};
  },
  skuInfo(state) {
    return state.detailInfo.skuInfo || {};
  },
  price(state) {
    return state.detailInfo.price || 0;
  },
  spuSaleAttrList(state) {
    return state.detailInfo.spuSaleAttrList || [];
  },
  valuesSkuJson(state) {
    return state.detailInfo.valuesSkuJson || "";
  }
};

export default {
  state, mutations, actions, getters
}
