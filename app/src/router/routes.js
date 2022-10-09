const Home = () => import('@/pages/Home');
const Login = () => import('@/pages/Login');
const Search = () => import('@/pages/Search');
const Register = () => import('@/pages/Register');
const Detail = () => import('@/pages/Detail');
const AddCartSuccess = () => import('@/pages/AddCartSuccess');
const ShopCart = () => import('@/pages/ShopCart');
const Trade = () => import('@/pages/Trade');
const Pay = () => import('@/pages/Pay');
const Center = () => import('@/pages/Center');

export default [
  {
    path: "/center",
    name: "Center",
    component: Center,
    meta: { show: false },
  },
  {
    path: "/pay",
    name: "Pay",
    component: Pay,
    meta: { show: false },
  },
  {
    path: "/trade",
    name: "Trade",
    component: Trade,
    meta: { show: false },
    beforeEnter: (to, from, next) => {
      if (from.path === '/shopCart') {
        next();
      } else {
        next(false);
      }
    }
  },
  {
    path: "/shopCart",
    name: "ShopCart",
    component: ShopCart,
    meta: { show: false },
  },
  {
    path: "/addCartSuccess",
    name: "addCartSuccess",
    component: AddCartSuccess,
    meta: { show: false },
  },
  {
    path: "/detail/:skuId",
    name: 'Detail',
    component: Detail,
    meta: { show: false },
  },
  {
    path: "/home",
    component: Home,
    meta: { show: true },
  },
  {
    path: "/search/:keyword?",
    component: Search,
    meta: { show: false },
    name: "search",
  },
  {
    path: "/login",
    component: Login,
    meta: { show: false },
  },
  {
    path: "/register",
    component: Register,
    meta: { show: false },
  },
  {
    path: "*",
    redirect: "/home",
  },
];
