import React from 'react'
import style from './questions.module.css'

import { useNavigate } from 'react-router-dom';

export default function Questions() {

    let navigate = useNavigate()

  return (
      <>
          <form className={style.form}>
              <h1 className={style.questions}>How do you create secrets in Kubernetes?</h1>
              <div className={style.answers}>
                  <div className={style.options}>
                      <input id='a' type="radio"/>
                      <label for='a'>answer</label>
                  </div>
                  <div className={style.options}>
                      <input id='b' type="radio"/>
                      <label for='b'>answer</label>
                  </div>
                  <div className={style.options}>
                      <input id='c' type="radio"/>
                      <label for='c'>answer</label>
                  </div>
                  <div className={style.options}>
                      <input id='d' type="radio"/>
                      <label for='d'>answer</label>
                  </div>
              </div>
          </form>
          <div className={style.next}>
              <button onClick={()=>{navigate('/getresult')}}>Next</button>
          </div>
      </>
      
  )
}
