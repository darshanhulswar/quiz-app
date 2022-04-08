import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: [],
  correct_answers: 0,
  wrong_answers: 0,
};

const quizReducer = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setQuestions: (state, action) => {
      state.questions = action.payload;
    },
    increaseCorrectCount: (state, action) => {},
    increaseWrongCount: (state, action) => {},
    reset: (state, action) => {},
  },
});

export const { setQuestions, increaseCorrectCount, increaseWrongCount, reset } =
  quizReducer.actions;
export default quizReducer.reducer;
