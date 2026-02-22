import React, { useEffect, useState } from 'react'
import {Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar'
import audio1 from './assets/Instinct - Rainy Train Ride.mp3'
import Home from './pages/Home'
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Hobbies from "./pages/Hobbies";
import Contact from "./pages/Contact";

  const App = () => {

    const currentTheme = localStorage.getItem('currentTheme');
    const[theme,setTheme] = useState(currentTheme? currentTheme: 'dark');

    useEffect(()=>{
      localStorage.setItem('currentTheme',theme);
    },[theme])
  return (
      <div className={`container ${theme}`}>
        <Navbar theme={theme} setTheme={setTheme}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/hobbies" element={<Hobbies />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      
  )
}

export default App
