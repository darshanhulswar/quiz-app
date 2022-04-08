import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import AnswerOption from "./AnswerOption";
import style from "./questions.module.css";
import { useNavigate } from "react-router-dom";

export default function Question({
  question,
  answers,
  correct_answers,
  userSelectedAnswer,
}) {
  let navigate = useNavigate();

  const options = [];
  let count = 0;
  for (const key in answers) {
    if (count++ < 4) {
      if (answers[key] === null || "") return;
      options.push(<AnswerOption key={key} label={answers[key]} />);
    }
  }

  return (
    <ReactFullpage
      licenseKey={""}
      scrollingSpeed={1000}
      render={(state, fullpageApi) => {
        return (
          <ReactFullpage.Wrapper>
            <form className={style.form}>
              <h1 className={style.questions}>{question}</h1>
              <div className={style.answers}>{options}</div>
            </form>
            <div className={style.next}>
              <button
                onClick={() => {
                  navigate("/getresult");
                }}
              >
                Next
              </button>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
}
