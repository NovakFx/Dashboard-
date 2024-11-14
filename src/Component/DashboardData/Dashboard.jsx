import React from 'react'
import './Dashboard.css'
import MainDash from '../MainDash/MainDash'
import Calender from '../CalenderData/Calender'

const Dashboard = () => {
  return (
    <div className='head'>
      
        <MainDash />
        <Calender />
        
    </div>
  )
}

export default Dashboard