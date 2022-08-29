import React from 'react'
import '../Circles/Circles.css'

const Circles = (props) => {
 
  return (
    <div className='Circles'>
      {props.nums.map((x)=><div className={props.circle[x] ? 'selected': null}>{x}</div>)}
    </div>
  )
}

export default Circles
