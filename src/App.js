import { useEffect } from "react";
import { fetchQuestions } from "./components/store/quizActions";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";

import { Routes, BrowserRouter as Router, Route } from "react-router-dom";

import Questions from "./components/questions";
import Home from "./components/home";
import GetResult from "./components/getResult";
import Exit from "./components/exit";
import PieChart from "./components/pieChart";
import Notfound from "./components/notfoud.js";

function App() {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.quiz);

  useEffect(() => {
    dispatch(fetchQuestions());
  }, []);

  return (
    <Router>
      <div className="App">
        <div className="Name">
          <h1>Quizz</h1>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/getresult" element={<GetResult />} />
          <Route path="/exit" element={<Exit />} />
          <Route path="/piechart" element={<PieChart />} />
          <Route path="/*" element={<Notfound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

{
  /* <div className='Name'>
<h1>Quizz</h1>
</div>
<div className="Component">
<Home />
<Questions />
<GetResult />
<Exit />
<PieChart />
</div> */
}
