import React from "react";
import style from "./questions.module.css";

const AnswerOption = ({ label }) => {
  return (
    <div className={style.options}>
      <input id="a" type="radio" />
      <label htmlFor="a">{label}</label>
    </div>
  );
};

export default AnswerOption;
