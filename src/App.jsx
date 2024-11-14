import './App.css'
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Component/DashboardData/Dashboard';

import Sidebar from './Component/Sidebar/Sidebar';
import AssData from './Component/Assignment/AssData';
import Mentors from './Component/Mentors/Mentors';
import Message from './Component/Message/Message';
import Insight from './Component/Insight/Insight';



function App() {
  return (
    <div className="App">
      <div className="main">
          <Sidebar />
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='AssData' element={<AssData />} />
            <Route path='Mentors' element={<Mentors />} />
            <Route path='Message' element={<Message />} />
            <Route path='Insight' element={<Insight />} />

          </Routes>
          
       
      </div>
    </div>
  );
}

export default App;
