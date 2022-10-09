import { reqUserAddress } from "@/api"
const state = {
  address: []
};

const mutations = {
  GETUSERADDRESS(state, address) {
    state.address = address;
  }
};

const actions = {
  async getUserAddress({ commit }) {
    let res = await reqUserAddress();
    if (res.code == 200) {
      commit('GETUSERADDRESS', res.data);
    }
  }
};

const getters = {

};

export default {
  state, mutations, actions, getters
}