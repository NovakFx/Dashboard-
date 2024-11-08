import React from 'react'
import './PercentBar.css';

const PercentBar = ({percentage}) => {
  return (
    <div className="progress-bar">
      
      <div
        className="progress-bar-fill"
        style={{ width: `${percentage}%` }} 
      > <span className='bar'>50%</span></div>
    </div> 
  )
}

export default PercentBar