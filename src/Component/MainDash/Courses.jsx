import React from 'react'
import './Courses.css'
import PercentBar from './PercentBar'



const Courses = () => {
  return (
    <div className='Rightside'>

      <h1 className='edris'>Continue Course  <span className='See'>See All</span></h1>

      <div className='course'> 
        <div className='inner'>
          <div className='Img'>
            <img src="images/group77.png" alt="" />
          </div>
            <div className='men'>
              <p className='Ui'>UI Design  <div className='percent'><PercentBar percentage={50} /> </div>  </p>
              <p>Build Mobile Application Design with Figma</p>

            </div>
          
        </div>
      </div>

     {/* <div className='course'> 
        <div className='inner'>
          <div className='Img'>
            <img src="images/group79.png" alt="" />
          </div>
            <div className='men'>
              <p className='Ui'>Basic Programming <div className='percent'><PercentBar percentage={70} /> </div>  </p>
              <p>Compiling and Running C++ Program Code</p>

            </div>
          
        </div>
      </div> */}

    </div>
  )
}

export default Courses