import axios from "axios";

export const getAllProduct = async () => {
  const res = await axios.get("http://localhost:3000/api/product/get-all");
  // console.log(res.data);
  return res.data;
};

export const getDetailUser = async (id) => {
  const res = await axios.get(
    `http://localhost:3000/api/user/get-details/${id}`
  );
  return res.data;
};
