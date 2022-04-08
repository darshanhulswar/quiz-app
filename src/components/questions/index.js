import React from "react";
import Question from "./Question";
import { useSelector } from "react-redux";

export default function Questions() {
  const questions = useSelector((state) => state.quiz.questions);
  return (
    <>
      {questions.map((question) => (
        <Question
          key={question.id}
          question={question.question}
          answers={question.answers}
          correctAnswer={question.correct_answer}
          userSelectedAnswer={question.userSelectedAnswer}
        />
      ))}
    </>
  );
}
