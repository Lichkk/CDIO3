import Home from "../page/Home/Home";
import Login from "../page/Login/Login";
import Shop from "../page/Shop/Shop";

export const routes = [
  {
    path: "/login",
    page: Login,
    // isShowHeader: true,
  },
  {
    path: "/",
    page: Home,
    // isShowHeader: true,
  },
  {
    path: "/shop",
    page: Shop,
    // isShowHeader: true,
  },
];
