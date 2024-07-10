import { createSlice } from "@reduxjs/toolkit";
const quizSlice = createSlice({
  name: "quiz",
  initialState: { isStart: false, difficulty: "Kolay" },
  reducers: {
    setIsStart: (state, action) => {
      state.isStart = action.payload;
    },
    setDifficulty: (state, action) => {
      state.difficulty = action.payload;
    },
  },
});
export const { setIsStart, setDifficulty } = quizSlice.actions;
export default quizSlice.reducer;
