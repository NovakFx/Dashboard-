import React, { useState } from 'react'
import './Sidebar.css'
import DashboardIcon from '@mui/icons-material/Dashboard';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import GroupsIcon from '@mui/icons-material/Groups';
import TextsmsIcon from '@mui/icons-material/Textsms';
import Assessment from '@mui/icons-material/Assessment';
import Settings from '@mui/icons-material/Settings';

const Sidebar = () => {
  const [selected, setSelected] = useState(0);

  const menuItems = [
    { icon: <DashboardIcon />, label: "Dashboard" },
    { icon: <LibraryBooksIcon />, label: "Assignment" },
    { icon: <GroupsIcon />, label: "Mentors" },
    { icon: <TextsmsIcon />, label: "Message" },
    { icon: <Assessment />, label: "Insight" },
    { icon: <Settings />, label: "Settings" }
  ];

  return (
    <div className="Sidebar">

      <div className="logo">
        <img src="images/Logo.png" alt="" />
        <span>MILESTONE <br /> ACADEMY</span>
      </div>

      <div className="menu">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`menuItem ${selected === index ? 'active' : ''}`}
            onClick={() => setSelected(index)}
          >
            <div className="icon">{item.icon}</div>
            <span>{item.label}</span>
          </div>
        ))}
      </div>

      <div className="sideImage" style={{ position: 'relative' }}>
        <img src="images/group145.png" alt="" />
        <button
          style={{
            position: 'absolute',
            top: '87px',
            left: '15px',
            zIndex: 1,
          }}
        >
          Upgrade
        </button>
      </div>

    </div>
  );
};

export default Sidebar;
