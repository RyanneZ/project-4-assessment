import React from 'react'
import '../CircleSelector/CircleSelector.css'
const CircleSelector = (props) => {
  return (
    <div className='CircleSelector'>
      <button onClick={props.handleClickBtn1} className={props.btn1 ? 'selected' : null} >{props.text1}</button>
      <button onClick={props.handleClickBtn2} className={props.btn2 ? 'selected' : null} >{props.text2}</button>
      <button onClick={props.handleClickBtn3} className={props.btn3 ? 'selected' : null} >{props.text3}</button>
      <button onClick={props.handleClickBtn4} className={props.btn4 ? 'selected' : null} >{props.text4}</button>
    </div>
  )
}

export default CircleSelector
