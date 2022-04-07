import React from 'react'
import style from './getResult.module.css'

import { useNavigate } from 'react-router-dom';

export default function GetResult() {
    let navigate = useNavigate();
    return (
        <>
            <div className={style.gridContainer}>
                <div className={style.text}>
                    <h3>You have finished all questions!</h3>
                    <h4>Now it's time to get the result, click below and enjoy!</h4>
                </div>
                <div className={style.button}>
                    <button onClick={()=>{navigate('/exit')}}>Get Results</button>
                </div>
            </div>

        </>
  )
}
