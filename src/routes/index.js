import Cart from "../page/Cart/Cart";
import Home from "../page/Home/Home";
import Login from "../page/Login/Login";
import ProductDetails from "../page/ProductDetails/ProductDetails";
import Profile from "../page/Profile/Profile";
import Register from "../page/Register/Register";
import Shop from "../page/Shop/Shop";

export const routes = [
  {
    path: "/login",
    page: Login,
    isShowHeader: true,
  },
  {
    path: "/",
    page: Home,
    isShowHeader: true,
  },
  {
    path: "/signup",
    page: Register,
    // isShowHeader: true,
  },
  {
    path: "/shop",
    page: Shop,
    isShowHeader: true,
  },
  {
    path: "/cart",
    page: Cart,
    isShowHeader: true,
  },
  {
    path: "/product-details/:_id",
    page: ProductDetails,
    isShowHeader: true,
  },
  {
    path: "/profile",
    page: Profile,
    isShowHeader: true,
  },
];
