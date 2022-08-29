import React from 'react'
import '../Circles/Circles.css'

const Circles = (props) => {
  return (
    <div className='Circles'>
      <div className={props.circle1 ? 'selected': null}>1</div>
      <div className={props.circle2 ? 'selected': null}>2</div>
      <div className={props.circle3 ? 'selected': null}>3</div>
      <div className={props.circle4 ? 'selected': null}>4</div>
      
    </div>
  )
}

export default Circles
