import { createSlice } from "@reduxjs/toolkit";

const applicationSlice = createSlice({
  name: "application",
  initialState: {
    applicants: [],
  },
  reducers: {
    setAllAppcants: (state, action) => {
      state.applicants = action.payload;
    },
  },
});

export const { setAllAppcants } = applicationSlice.actions;
export default applicationSlice.reducer;
