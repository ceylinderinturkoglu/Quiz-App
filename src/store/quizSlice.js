import { createSlice } from "@reduxjs/toolkit";
const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    isStart: false,
    difficulty: "Kolay",
    score: 0,
    isCompleted: false,
  },
  reducers: {
    setIsStart: (state, action) => {
      state.isStart = action.payload;
    },
    setDifficulty: (state, action) => {
      state.difficulty = action.payload;
    },
    incrementScore: (state, action) => {
      state.score += action.payload;
    },
    resetScore: (state) => {
      state.score = 0;
    },
    setIsCompleted: (state, action) => {
      state.isCompleted = action.payload;
    },
  },
});
export const {
  setIsStart,
  setDifficulty,
  incrementScore,
  resetScore,
  setIsCompleted,
} = quizSlice.actions;
export default quizSlice.reducer;
