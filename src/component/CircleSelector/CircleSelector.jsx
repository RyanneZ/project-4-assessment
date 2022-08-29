import React from 'react'
import '../CircleSelector/CircleSelector.css'
const CircleSelector = (props) => {
 
  return (
    <div className='CircleSelector'>
      {props.nums.map(x => <button key={`btn${x}`}onClick={() => {props.handleClickBtn(x)}} className={props.btn[x] ? 'selected' : null} >{props.text[x]}</button> )} 
    </div>
  )
}
export default CircleSelector
