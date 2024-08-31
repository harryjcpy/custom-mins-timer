import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from 'react';
import './App.css';
import Heading from "./componets/Heading";
import TimerButton from "./componets/TimmerButton";
import { FiSun } from "react-icons/fi";
import { LuMoon } from "react-icons/lu";


function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
    <Heading></Heading>
    <div className={`app-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
    <button className="btn btn-light theme-toggle-button" onClick={toggleTheme}>
        {isDarkMode ? <FiSun size={20}/> : <LuMoon size={20}/>}
      </button>
    <TimerButton></TimerButton>
    </div>
    </>
  );
};

export default App
