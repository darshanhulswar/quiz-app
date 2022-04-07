import React from 'react'
import style from './home.module.css'

import { useNavigate } from 'react-router-dom';

export default function Home() {

    let navigate = useNavigate();
  return (
      <>
          <div className={style.home}>
            <div className={style.description}>
                <h2>Welcome to Online Quizz Practice</h2>
            </div>  
            <div className={style.button}>
                <button onClick={()=>{navigate("/questions")}}>Take a Quizz</button>
            </div>
          </div>
      </>
  )
}
