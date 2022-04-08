import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "./quizReducer";

const store = configureStore({
  reducer: {
    quiz: quizReducer,
  },
});

export default store;
