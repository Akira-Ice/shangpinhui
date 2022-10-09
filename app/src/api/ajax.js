import axios from "axios";
import store from "@/store";
import nprogress from "nprogress";
import "nprogress/nprogress.css";
import { setToken, getToken, removeToken } from '@/util/token';

const requests = axios.create({
  baseURL: "/api",
  timeout: 5000
})

//请求拦截器
requests.interceptors.request.use((config) => {
  let uuid_token = store.state.detail.uuid_token;
  let token = localStorage.getItem("TOKEN") || store.state.user.token;
  if (token) {
    config.headers.token = token;
  } else if (uuid_token) {
    config.headers.userTempId = uuid_token;
  }

  nprogress.start()
  return config
})

//响应拦截器
requests.interceptors.response.use((res) => {
  nprogress.done()
  return res.data
}, (error) => {
  console.log(error)
  return Promise.reject(new Error("faild"))
})

export default requests;