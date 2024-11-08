import React from 'react'
import './Calender.css'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import CalendarForum from './Maincalender/CalenderForum';
import Chart from '../Chart/Chart';


const Calender = () => {
  return (
    <div className='whole'>

      <div className='data2'>

        <div className='jay'>

          <h1 className='yola'>Saturday<br /><span className='oct'>10th October 2024</span></h1>

          <div className='ico'>
            <div><NotificationsNoneIcon style={{ fontSize: '35px' }} /> </div>
            <img src="Images/ellipse77.png" alt="" />
          </div>
        
        </div>

        <div className='calen'>

          <CalendarForum />

        </div>

        <div className="Touch">
            <span className='my'>
              <h1>My Progress</h1>
              <h2>Weekly</h2>
            </span>
            <div className="chart">
              <Chart />
            </div>
        </div>

      </div>



    </div>
  )
}

export default Calender