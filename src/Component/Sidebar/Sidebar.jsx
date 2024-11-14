import React, { useState } from 'react';
import './Sidebar.css';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import GroupsIcon from '@mui/icons-material/Groups';
import TextsmsIcon from '@mui/icons-material/Textsms';
import Assessment from '@mui/icons-material/Assessment';
// import Settings from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [selected, setSelected] = useState(0);

  const menuItems = [
    { icon: <DashboardIcon />, label: "Dashboard", path: "/" },
    { icon: <LibraryBooksIcon />, label: "Assignment", path: "/AssData" },
    { icon: <GroupsIcon />, label: "Mentors", path: "/mentors" },
    { icon: <TextsmsIcon />, label: "Message", path: "/message" },
    { icon: <Assessment />, label: "Insight", path: "/insight" },
    // { icon: <Settings />, label: "Settings", path: "/settings" },
  ];

  return (
    <div className="Sidebar">
      <div className="logo">
        <img src="images/Logo.png" alt="" />
        <span>MILESTONE <br /> ACADEMY</span>
      </div>

      <div className="menu">
        {menuItems.map((item, index) => (
          <Link to={item.path} key={index} style={{ textDecoration: 'none' }}>
            <div
              className={`menuItem ${selected === index ? 'active' : ''}`}
              onClick={() => setSelected(index)}
            >
              <div className="icon">{item.icon}</div>
              <span>{item.label}</span>
            </div>
          </Link>
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
