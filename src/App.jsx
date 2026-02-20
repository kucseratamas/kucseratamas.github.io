import React, { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import audio1 from './assets/Instinct - Rainy Train Ride.mp3'
import Home from './components/Home'

  const App = () => {

    const currentTheme = localStorage.getItem('currentTheme');
    const[theme,setTheme] = useState(currentTheme? currentTheme: 'dark');

    useEffect(()=>{
      localStorage.setItem('currentTheme',theme);
    },[theme])
  return (
      <div className={`container ${theme}`}>
        <Navbar theme={theme} setTheme={setTheme}/>
        <Home/>
      </div>
      
  )
}

export default App
