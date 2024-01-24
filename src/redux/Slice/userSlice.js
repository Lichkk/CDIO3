import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  phone: "",
  address: "",
  avatar: "",
  access_token: "",
  id: "",
  isAdmin: false,
  city: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      const { name, email, access_token, avatar, address, phone, _id } =
        action.payload;
      state.name = name;
      state.email = email;
      state.avatar = avatar;
      state.address = address;
      state.phone = phone;
      state.id = _id;
      state.access_token = access_token;
    },

    resetUser: (state, action) => {
      state.name = "";
      state.email = "";
      state.avatar = "";
      state.address = "";
      state.phone = "";
      state.id = "";
      state.access_token = "";
    },
  },
});

export const { updateUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
