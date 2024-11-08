import React, { useState } from 'react';

function CalendarForum() {
  const [currentDate] = useState(new Date());

  const today = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();


  const prevMonthDays = new Date(year, month, 0).getDate();
  const prevMonthDaysArray = Array.from(
    { length: firstDayOfMonth },
    (_, i) => prevMonthDays - firstDayOfMonth + i + 1
  );


  const currentMonthDaysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

 
  const daysArray = [...prevMonthDaysArray, ...currentMonthDaysArray];

  return (
    <div style={{ margin: '0 auto', textAlign: 'center' }}>
      <h2>{currentDate.toLocaleString('default', { month: 'long' })} {year}</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)' }}>
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(day => (
          <div key={day} style={{ fontWeight: 'bold' }}>{day}</div>
        ))}
        
        {daysArray.map((day, index) => {
          const isToday = day === today.getDate() && month === today.getMonth() && year === today.getFullYear();
          const isPrevMonthDay = index < firstDayOfMonth;

          return (
            <div
              key={index}
              style={{
                height: '65px',
                padding: '7px',
                backgroundColor: isToday ? '#FFD700' : '',
                color: isToday ? '#000' : isPrevMonthDay ? 'rgba(0, 0, 0, 0.3)' : '',
                borderRadius: isToday ? '50%' : '',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: isToday ? 'bold' : 'normal',
                opacity: isPrevMonthDay ? 0.5 : 1, 
              }}
            >
              {day}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CalendarForum;
