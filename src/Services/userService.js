import axios from "axios";

export const axiosJWT = axios.create();

export const userLogin = async (data) => {
  const res = await axios.post("http://localhost:3000/api/user/sign-in", data);
  return res.data;
};

export const userRegister = async (data) => {
  const res = await axios.post("http://localhost:3000/api/user/sign-up", data);
  return res.data;
};

export const getDetailUser = async (id, access_token) => {
  const res = await axiosJWT.get(
    `http://localhost:3000/api/user/get-details/${id}`,
    {
      headers: {
        token: `Bearer ${access_token}`,
      },
    }
  );
  return res.data;
};

export const refreshToken = async () => {
  const res = await axios.post("http://localhost:3000/api/user/refresh-token", {
    withCredentials: true,
  });
  console.log(res.data);
  return res.data;
};

export const logoutUser = async () => {
  const res = await axios.post("http://localhost:3000/api/user/log-out");
  return res.data;
};
