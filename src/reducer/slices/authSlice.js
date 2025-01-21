import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  signupDate:null,
  loading:false,

  token: localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null,

};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    signupDate(state, value) {
      state.token = value.payload;
    },
    loading(state, value) {
      state.token = value.payload;
    },
    setToken(state, value) {
      state.token = value.payload;
    },
      
  },

});
 
 export const { setSignupData, setLoading ,setToken } = authSlice.actions;
  export default authSlice.reducer;
