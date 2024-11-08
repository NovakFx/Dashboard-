import React from 'react'
import './MainDash.css'
import Courses from './Courses'
import Ux from './Ux'
import UxTwo from './UxTwo'

const MainDash = () => {
  return (
    <div className="MainDash">
      <div className='input'>
        <h1>Welcome Back!</h1> 

        {/* <input 
        type="text" 
        placeholder='Search courses'
        /> */}

      </div>

        <div>
          <p className='sabrina'>Ichigo kurosaki</p>
          <p className='sabrina cap'>Features Course  <span className='See'>See All</span></p>
          </div>

       <div className='cardsParent'>  
        <div className='Cards'>

        <Ux />
        <UxTwo />
        
        </div>
       </div>
        
    <Courses />
      
    
    </div>

    
  )
}

export default MainDash