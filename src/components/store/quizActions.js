import { setQuestions } from "./quizReducer";
import { API_URL } from "../../API.config";

export const fetchQuestions = () => {
  return async (dispatch) => {
    console.log("fetchQuestions Action Creator");
    try {
      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const questions = await response.json();

      for (let question in questions) {
        questions[question].userSelectedAnswer = null;
      }

      dispatch(setQuestions(questions));
    } catch (error) {
      console.log(error);
    }

    // Show the data here
  };
};
