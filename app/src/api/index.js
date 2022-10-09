import requests from "./ajax";
import mockRequests from "./mockAjax";

//components/TypeNav/ 获取三级页面数据
export const reqCategoryList = () => requests({
  url: '/product/getBaseCategoryList', method: 'get'
});
//pages/Home/ListContainer/ 轮播数据 mock 模拟
export const reqBannerList = () => mockRequests({
  url: '/banner', method: 'get'
});
//pages/Home/Floor/ 轮播数据 mock 模拟
export const reqFloorList = () => mockRequests({
  url: '/floor', method: 'get'
});
//search路由数据
export const reqSearchInfo = (params) => requests({
  url: '/list', method: 'post', data: params
});
//detail /api/item/{ skuId } get
export const reqDetailInfo = (skuId) => requests({
  url: `/item/${skuId}`, method: 'get'
});
// detail addShopCar  /api/cart/addToCart/{ skuId }/{ skuNum } post
export const reqAddShopCar = (skuId, skuNum) => requests({
  url: `/cart/addToCart/${skuId}/${skuNum}`, method: 'post'
});

// shopCar 
// cartList /api/cart/cartList get 
export const reqCarList = () => requests({
  url: '/cart/cartList', method: 'get'
});
// checkCart /api/cart/checkCart/{skuID}/{isChecked} get
export const reqCheckCart = (skuID, isChecked) => requests({
  url: `/cart/checkCart/${skuID}/${isChecked}`, method: 'get'
});
// deleteCart /api/cart/deleteCart/{skuId} delete
export const reqDeleteCart = (skuId) => requests({
  url: `/cart/deleteCart/${skuId}`, method: 'delete'
})

// register
// /user/passport/sendCode/{phone}  get
export const reqGetCode = (phone) => requests({
  url: `/user/passport/sendCode/${phone}`, method: 'get'
})

// /user/passport/register post
export const reqRegister = (data) => requests({
  url: `/user/passport/register`, data, method: 'post'
})

// Login
// /api/user/passport/login post
export const reqLogin = (data) => requests({
  url: `/user/passport/login`, data, method: 'post'
})
// /user/passport/auth/getUserInfo get
export const reqGetUserInfo = () => requests({
  url: '/user/passport/auth/getUserInfo', method: 'get'
});

//loginOut
// /api/user/passport/logout get
export const reqLoginOut = () => requests({
  url: '/user/passport/logout', method: 'get'
});

//trade
// /api/user/userAddress/auth/findUserAddressList get
export const reqUserAddress = () => requests({
  url: '/user/userAddress/auth/findUserAddressList',
  method: 'get'
})