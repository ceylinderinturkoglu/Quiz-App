import { createSlice } from "@reduxjs/toolkit";
const quizSlice = createSlice({
  name: "quiz",
  initialState: { start: false, difficulty: "Zor" },
  reducers: {
    setStart: (state, action) => {
      state.start = action.payload;
    },
    setDifficulty: (state, action) => {
      state.difficulty = action.payload;
    },
  },
});
export const { setStart, setDifficulty } = quizSlice.actions;
export default quizSlice.reducer;
