import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import "./App.css";
import { routes } from "./routes";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { isJsonString } from "./utils";
import { jwtDecode } from "jwt-decode";
import { updateUser } from "./redux/Slice/userSlice";
import * as userService from "../src/Services/userService";

function App() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const user = useSelector((state) => state.user);

  useEffect(() => {
    setIsLoading(true);
    const { storageData, decoded } = handleDecoded();
    if (decoded?.id) {
      handleGetDetailUser(decoded?.id, storageData);
    }
    setIsLoading(false);
  }, []);

  const handleDecoded = () => {
    let storageData =
      user?.access_token || localStorage.getItem("access_token");
    let decoded = {};
    if (storageData && isJsonString(storageData) && !user?.access_token) {
      storageData = JSON.parse(storageData);
      decoded = jwtDecode(storageData);
    }
    return { decoded, storageData };
  };

  userService.axiosJWT.interceptors.request.use(
    async (config) => {
      const currentTime = new Date();
      const { decoded } = handleDecoded();
      if (decoded?.exp < currentTime.getTime() / 1000) {
        const data = await userService.refreshToken();
        config.headers["token"] = `Bearer ${data?.access_token}`;
      }
      // Do something before request is sent
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );
  const handleGetDetailUser = async (id, token) => {
    const res = await userService.getDetailUser(id, token);
    // console.log("getDetailUser", res);
    dispatch(updateUser({ ...res?.data, access_token: token }));
  };
  return (
    <div className="App">
      <Router>
        <Routes>
          {routes.map((route) => {
            const Page = route.page;
            return (
              <Route key={route.path} path={route.path} element={<Page />} />
            );
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
