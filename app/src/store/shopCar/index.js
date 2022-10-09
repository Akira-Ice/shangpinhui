import { reqCarList, reqCheckCart, reqAddShopCar, reqDeleteCart } from '@/api';
const state = {
  cartInfoList: []
};
const mutations = {
  GETCARLIST(state, cartInfoList) {
    state.cartInfoList = cartInfoList;
  }
};
const actions = {
  async getCarList({ commit }) {
    let res = await reqCarList();
    if (res.code == 200) {
      commit('GETCARLIST', res.data[0].cartInfoList);
    }
  },
  async updateSkuNum({ commit }, { skuId, skuNum }) {
    let res = await reqAddShopCar(skuId, skuNum);
    if (res.code === 200) {
      return 'ok';
    } else {
      return Promise.reject(new Error('faile'));
    }
  },
  async updateIsChecked({ commit }, { skuId, isChecked }) {
    let res = await reqCheckCart(skuId, isChecked);
    if (res.code === 200) {
      return 'ok';
    } else {
      return Promise.reject(new Error('faile'));
    }
  },
  async deleteCart({ commit }, { skuId }) {
    let res = await reqDeleteCart(skuId);
    if (res.code === 200) {
      return 'ok';
    } else {
      return Promise.reject(new Error('faile'));
    }
  }
};
const getters = {
  cartInfoList(state) {
    return state.cartInfoList || [];
  }
};
export default {
  state, mutations, actions, getters
}