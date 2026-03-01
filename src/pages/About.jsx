import '../components/About.css'
import { href } from 'react-router-dom'
import { Link } from "react-router-dom";
import github from '../assets/github.png'
import youtube from '../assets/youtube.png'
import Block from '../components/Block';
import { Canvas } from '@react-three/fiber';
//import { TDK } from '../components/TDK';
import { OrbitControls } from '@react-three/drei';
import React, { Suspense } from 'react';

const About = () => {
    return(
      
<div className="about">
  <div className="about-header">
    <h1 className="title">About Me</h1>
    <h2 className="subtitle">A brief summary of my education, technical skills, and interests.</h2>
  </div>

  <div className="timeline">

      <Block width="40%" height="35%" className="aboutblock left">
        <h1 className='abouttext1'>Introduction</h1>
        <h2 className='abouttext2'>I am Tamás Kucsera, a recent graduate in Computer Engineering from Óbuda University, where I specialized in Software Design and Development.
        I am interested in web development, mobile application development, and VR technologies. During my studies, I primarily worked with C#, while in my free time I explored additional programming languages and modern development frameworks. I particularly enjoy creating unique and innovative solutions, a mindset that is reflected both in my projects and in my personal work.
        I am highly motivated to continuously improve my professional skills, and I approach development with a strong focus on quality, precision, and performance.
        </h2>
      </Block>

      <Block width="40%" height="35%" className="aboutblock right">
        <h1 className='abouttext1'>Education</h1>
        <h2 className='abouttext2'>I graduated in February 2026 as a Computer Science Engineer from Óbuda University (John von Neumann Faculty of Informatics), specializing in Software Design and Development. 
          My technical foundation dates back to 2021, when I completed my studies at the Puskás Tivadar Telecommunications and Information Technology Vocational School, where I earned an advanced-level certificate in IT and also studied Telecommunications.
        </h2>
      </Block>
      
      <Block width="40%" height="35%" className="aboutblock left">
        <h1 className='abouttext1'>Languages</h1>
        <h2 className='abouttext2'>Hungarian is my native language. I have a B2 (upper-intermediate) certification in English, and I am confident using professional and technical English in a development environment.
        </h2>
      </Block>

      <Block width="40%" height="35%" className="aboutblock right">
        <h1 className='abouttext1'>Academic Achievements</h1>
        <h2 className='abouttext2'>I achieved 2nd place at the local Scientific Students' Association Conference (TDK) in the 'IT and Robotics Applications' section. 
        My project involved the photogrammetric reconstruction of the OE-NIK campus interior for Virtual Reality, 
        hich I further enhanced by developing and integrating a custom navigation system to guide users through the digital environment.</h2>
        <Link to="/projects" onClick={() => window.scrollTo(0, 0)} className="learnmore">Learn More About my TDK Project Here</Link>
      </Block>

      <Block width="40%" height="35%" className="aboutblock left">
        <h1 className='abouttext1'>My Hobbies</h1>
        <h2 className='abouttext2'>In my free time, I regularly work out at outdoor fitness parks, where physical activity and continuous self-improvement are part of my daily routine. 
          Music is also an important part of my life: I play the piano and kalimba, and I create my own beats using music production software, which I plan to publish on YouTube in the future. 
          I also work with video editing, creatively combining visual and audio elements. In addition, I am interested in vector graphics, which allows me to express my creativity through clean and visually structured designs.</h2>
          <Link to="/hobbies" onClick={() => window.scrollTo(0, 0)} className="learnmore">Learn More About my Hobbies Here</Link>
      </Block>
      
  </div>
</div>
    )
}

export default About