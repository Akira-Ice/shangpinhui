import { reqGetCode, reqRegister, reqLogin, reqGetUserInfo, reqLoginOut } from '@/api';
import { setToken,getToken,removeToken } from '@/util/token';
const state = {
  code: '',
  token: localStorage.getItem("TOKEN"),
  userInfo: {}
};
const mutations = {
  GETCODE(state, code) {
    state.code = code;
  },
  SETUSERTOKEN(state, token) {
    state.token = token
  },
  SETUSERINFO(state, data) {
    state.userInfo = data
  },
  CLEAR(state) {
    state.token = '';
    state.userInfo = {};
    removeToken();
  }
};
const actions = {
  async getCode({ commit }, phone) {
    let res = await reqGetCode(phone);
    if (res.code === 200) {
      commit('GETCODE',res.data);
      return 'ok';
    } else {
      return Promise.reject(new Error('faile'));
    }
  },
  async Register({ commit }, user) {
    let res = await reqRegister(user);
    if (res.code === 200) {
      return 'ok';
    } else {
      return Promise.reject(new Error(`${res.code}`));
    }
  },
  async Login({ commit }, user) {
    let res = await reqLogin(user);
    if (res.code === 200) {
      commit("SETUSERTOKEN", res.data.token);
      await setToken(res.data.token);
      return 'ok';
    } else {
      console.log(res);
      return Promise.reject(new Error(res.message));
    }
  },
  async getUserInfo({ commit }) {
    let res = await reqGetUserInfo();
    if (res.code === 200) {
      //vuex存储用户信息
      commit('SETUSERINFO', res.data)
      return 'ok'
    } else {
      // return Promise.reject(new Error(res.message))
    }
  },
  async loginOut({ commit }) {
    let res = await reqLoginOut();
    if (res.code === 200) {
      //vuex存储用户信息
      commit('CLEAR', res.data)
      return 'ok'
    } else {
      return Promise.reject(new Error(res.message))
    }
  }
};
const getters = {

};
export default {
  state, mutations, actions, getters
}