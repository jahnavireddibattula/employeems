
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { GoMoon } from "react-icons/go";
import Employees from './Employees';
import Projects from './Projects'

import {  Routes } from 'react-router';
import { HiMiniUserGroup } from "react-icons/hi2";
import { LuCalendarCheck } from "react-icons/lu";
import { FaPeopleRoof } from "react-icons/fa6";
import { RxDashboard } from "react-icons/rx";
import { BiDollarCircle } from "react-icons/bi";
import { IoBagCheckOutline } from "react-icons/io5";
import { SlPeople } from "react-icons/sl";
import { PiNotepad } from "react-icons/pi";
import { MdCalendarMonth } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { AddEmployee } from './AddEmployee';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './Dashboard.css';
import { CiLight } from "react-icons/ci";
import { Attendence } from './Attendence';
import { Payroll } from './Payroll';
import { Candidates } from './Candidates';
import { Leaves } from './Leaves';
import { Holidays } from './Holidays';
import { Settings } from './Settings';
const  Dashboard = () => {
 

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(false);
  };

  const toggleLightMode = () => {
    setIsDarkMode(true);
  };
  return (
    <Router>
      <div style={{ display: 'flex', height: '100vh',backgroundColor: isDarkMode ? '#333' : '#fff', color: isDarkMode ? '#fff' : '#000' }}>
       
        <div style={{ width: '20%', backgroundColor: '#f0f0f0', padding: '20px',backgroundColor: isDarkMode ? '#333' : '#f0f0f0' }}>
         <img src="./manag.png" alt="no-img" style={{ height: '50px', width: '50px', borderRadius: '50%', marginRight: '10px'}}/>
          <h2 style={{marginLeft:"50px",marginTop:"-40px",color: isDarkMode ? "#fff" : "black" }}>HRXcel</h2>
          <h3 style={{marginTop:"60px",fontSize:"19px",marginLeft:"15px"}}><RxDashboard />&nbsp;Dashboard </h3>
          <br/>
            <Link to="/employees"  className={`nav-link ${window.location.pathname === '/employees' ? 'active-link' : ''}`} style={{textDecoration:"none",color: isDarkMode ? '#fff' : '#000'}} ><HiMiniUserGroup />&nbsp;AllEmployees</Link>
            
            <Link to="/projects"className="nav-link"  style={{textDecoration:"none",color: isDarkMode ? '#fff' : '#000'}} ClassName="active-link"><FaPeopleRoof />&nbsp;All Departments</Link>
            
            <Link to="/Attendence" className="nav-link" style={{textDecoration:"none",color: isDarkMode ? '#fff' : '#000'}}><LuCalendarCheck />Attendence</Link>

            
            <Link to="/payroll" className="nav-link" style={{textDecoration:"none",color: isDarkMode ? '#fff' : '#000'}}><BiDollarCircle />&nbsp;Payroll</Link>
            
            <Link to="/jobs" className="nav-link" style={{textDecoration:"none",color: isDarkMode ? '#fff' : '#000'}}><IoBagCheckOutline />&nbsp;Jobs</Link>
            
            <Link to="/candidates" className="nav-link" style={{textDecoration:"none",color: isDarkMode ? '#fff' : '#000'}}><SlPeople/>&nbsp;Candidates</Link>
            
            <Link to="/Leaves" className="nav-link"style={{textDecoration:"none",color: isDarkMode ? '#fff' : '#000'}}><PiNotepad />&nbsp;Leaves</Link>
            
            <Link to="/Holidays" className="nav-link"  style={{textDecoration:"none",color: isDarkMode ? '#fff' : '#000'}}><MdCalendarMonth/>&nbsp;Holidays</Link>
            
            <Link to="/Settings" className="nav-link" style={{textDecoration:"none",color: isDarkMode ? '#fff' : '#000'}}><IoSettingsOutline/>&nbsp;Settings</Link>
            
            
            <button className="btn btn-primary mt-3" onClick={toggleDarkMode}>
            <CiLight size={18} />Light Mode
            </button>&nbsp;
            <button className="btn btn-light mt-3 ml-2 " onClick={toggleLightMode}>
            <GoMoon size={18}/>Dark Mode
            </button>
        </div>
        
          
        
        <div style={{ width: '70%', padding: '20px' }}>
          <Routes>

          <Route  index path="/" element={<Employees/>} />
          <Route  index path="/employees" element={<Employees/>} />
          <Route path="/add-employee" element={<AddEmployee />} />

          <Route path="/projects"  element={<Projects/>} />
          <Route path="/Attendence" element={<Attendence/>} />
          <Route path="/payroll" element={<Payroll/>} />
          <Route path="/jobs" element={<jobs/>} />
          <Route path="/candidates" element={<Candidates/>} />
          <Route path="/Leaves" element={<Leaves/>} />
          <Route path="/Holidays" element={<Holidays/>} />
          <Route path="/Settings" element={<Settings/>} />

          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default Dashboard;
