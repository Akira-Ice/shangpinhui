import { reqSearchInfo } from '@/api';
import { reqTrademarkImgList } from '@/api';
const state = {
  searchInfo: {},
};
const mutations = {
  GETSEARCHINFO(state, searchInfo) {
    state.searchInfo = searchInfo;
  }
};
const actions = {
  async getSearchInfo({ commit }, params = {}) {
    let res = await reqSearchInfo(params);
    if (res) {
      commit("GETSEARCHINFO", res.data);
    }
  }
};
const getters = {
  goodsList(state) {
    return state.searchInfo.goodsList || [];
  },
  attrsList(state) {
    return state.searchInfo.attrsList || [];
  },
  trademarkList(state) {
    return state.searchInfo.trademarkList || [];
  },
  pageInfo(state) {
    return { pageNo: state.searchInfo.pageNo, pageSize: state.searchInfo.pageSize, total: state.searchInfo.total, totalPages: state.searchInfo.totalPages } || {};
  }
};
export default {
  state, mutations, actions, getters
}