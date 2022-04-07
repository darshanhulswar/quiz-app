import React from 'react'
import style from './pieChart.module.css'

import { useNavigate } from 'react-router-dom';

export default function PieChart() {

    let navigate = useNavigate()

    return (
        <>
            <div className={style.gridContainer}>
                <div className={style.text}>
                    Chart
                </div>

                <div className={style.button}>
                    <button>Result in Text Format</button>
                    <button onClick={()=>{navigate('/')}}>Exit</button>
                </div>
            </div>

        </>
  )
}
