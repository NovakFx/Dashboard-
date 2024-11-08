import './App.css'
import Calender from './Component/CalenderData/Calender';
import MainDash from './Component/MainDash/MainDash';
import Sidebar from './Component/Sidebar/Sidebar';


function App() {
  return (
    <div className="App">
      <div className="main">
        
        <Sidebar />
        <MainDash />
        <Calender />

      </div>
    </div>
  );
}

export default App;
