import React, { useEffect, useRef, useState } from "react";
import './Navbar.css'
import logo_dark from '../assets/switch (1).png'
import logo_light from '../assets/toggle-button.png'
import rainMusic from '../assets/Instinct - Rainy Train Ride.mp3'
import happyMusic from '../assets/Instinct - The Way Home.mp3'
import audioOn_logo_black from '../assets/musicon.png'
import audioOff_logo_black from '../assets/musicoff.png'
import audioOn_logo_blue from '../assets/musiconblue.png'
import audioOff_logo_blue from '../assets/musicoffblue.png'
import { Link } from "react-router-dom";

const Navbar = ({theme, setTheme}) => {

    const rainAudio = useRef(new Audio(rainMusic));
    const happyAudio = useRef(new Audio(happyMusic));

    const [musicOn, setMusicOn] = useState(false);

    const getAudioIcon = () => {
        if(theme === 'light') {
            return musicOn ? audioOn_logo_black : audioOff_logo_black;
        }else {
            return musicOn ? audioOn_logo_blue : audioOff_logo_blue;
        }
    };

    useEffect(()=>{
        rainAudio.current.loop = true;
        happyAudio.current.loop = true;
    },[]);
    const toggle_mode = () => {
        if (theme == 'light') {
            setTheme('dark')
        }
        else{
            setTheme('light');
        }
    }
    const toggle_music = () => {
    setMusicOn(prev => !prev);
}
    useEffect(()=>{
        rainAudio.current.pause();
        happyAudio.current.pause();
        if(!musicOn) return;
        if (theme == 'dark') {
            rainAudio.current.play();
            rainAudio.current.volume = 0.2;
        }else{
            happyAudio.current.play();
            happyAudio.current.volume = 0.2;
        }
    },[theme, musicOn]);

    return(
        <div className="navbar">
            <Link to="/">
            <h1 className="portfolio">Portfolio</h1>
            </Link>
            <ul>
                <Link to="/"><li>Home</li></Link>
                <Link to="/about"><li>About</li></Link>
                <Link to="/skills"><li>Skills</li></Link>
                <Link to="/projects"><li>Projects</li></Link>
                <Link to="/hobbies"><li>Hobbies</li></Link>
                <Link to="/contact"><li>Contact</li></Link>
            </ul>
            <div className="controls">
                <img onClick={toggle_music} src={getAudioIcon()} alt="" className="musicButton"/>

                <img onClick={()=>toggle_mode()} src={theme == 'light' ? logo_light : logo_dark} alt="" className="toggleicon"/>
            </div>
            
        </div>
    )
}

export default Navbar