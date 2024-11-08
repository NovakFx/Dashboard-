import React from 'react'
import './Chart.css'

const Chart = () => {
  return (
   <div className="bgDiv">
    <div  className="chartBody">

     <div className='chartNum'>

      <span><img  src="images/ellipse79.png" alt="" />
      <span className='num1'>1%</span>
      <span className='num2'>50%</span>
      <span className='num3'>100%</span>
      <span className='num4'>32</span>
      <span className='num5'>Courses</span>
      </span>

      </div>
      
      <div className="status">
        <span><div className='circleRed1'></div> <p>To Start</p></span>
        <span><div className='circleRed2'></div> <p>On Progress</p></span>
        <span><div className='circleRed3'></div> <p>Completed</p></span>
      </div>

    </div>
   </div>
  )
}

export default Chart