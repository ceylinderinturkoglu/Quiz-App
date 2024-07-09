import { createSlice } from "@reduxjs/toolkit";
const quizSlice = createSlice({
  name: "quiz",
  initialState: { start: false },
  reducers: {
    setStart: (state, action) => {
      state.start = action.payload;
    },
  },
});
export const { setStart } = quizSlice.actions;
export default quizSlice.reducer;
