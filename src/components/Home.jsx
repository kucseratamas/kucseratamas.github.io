import instagram from '../assets/instagram.png'
import youtube from '../assets/youtube.png'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
import './Home.css'
import { href } from 'react-router-dom'
import download from '../assets/download.png'
import cv from '../assets/CV.pdf'

const Home = () => {
    const socialIcons = [
        {icon: instagram, alt: 'Instagram', url: 'https://www.instagram.com/kucsi_tomi/'},
        {icon: linkedin, alt: 'LinkedIn', url: 'https://www.linkedin.com/in/tam%C3%A1s-kucsera/'},
        {icon: github, alt: 'GitHub', url: 'https://github.com/kucseratamas'},
        {icon: youtube, alt: 'YouTube', url: 'https://youtube.com/@instincto_o?si=j9Fawh0rLxFy45qm'},
        
    ]
    return(
        <section>
            <div className="home scroll-area">
                <div className="socialIcons">
                    {socialIcons.map((item, index) => (
                        <a key={index} href={item.url}target="_blank" rel="noreferrer">
                        <img src={item.icon} alt={item.alt} className="socialIcon"/>
                        </a>
                    ))}
                </div>
                <h1 className="greeting">Hi, I'm Tamás Kucsera</h1>
                <h2 className="introduction">Computer Engineering graduate specialized in Software Design and Development.
                Focused on VR, web and mobile application development.
                </h2>
                <div className='homebuttons'>
                    <a href={cv} download className="cvdownload">
                        <img src={download} alt="" className="btnIcon" />
                    Download CV
                    </a>
                    <a className="contactme">Contact Me</a>
                </div>
            </div>
            
                <div className="homeAbout scroll-area">
                    <h1 className="greeting">About Me</h1>
                    <h2 className="introduction">Take a look at this section to get to know me better. 
                        You’ll find information about my skills, experience, educational background, a short life story, and a few words about my recent projects.
                    </h2>
                    <div className='homebuttons'>
                        <a href={cv} download className="cvdownload">
                            <img src={download} alt="" className="btnIcon" />
                        Download CV
                        </a>
                        <a className="learnmore">Learn More</a>
                    </div>
                </div>
                
                <div className="homeSkills scroll-area">
                    <h1 className="greeting">My Skills</h1>
                    <h2 className="introduction">Discover the skills I’ve built and the technologies I’ve gained experience with, both during my studies and through real projects. 
                        This page provides a deeper look at my expertise and the tools I enjoy working with.
                    </h2>
                    <div className='homebuttons'>
                        <a href={cv} download className="cvdownload">
                            <img src={download} alt="" className="btnIcon" />
                        Download CV
                        </a>
                        <a className="learnmore">Learn More</a>
                    </div>
                </div>
                
                <div className="homeProjects scroll-area">
                    <h1 className="greeting">Projects</h1>
                    <h2 className="introduction">Through these projects, I have gained valuable experience and learned to work effectively with various tools, frameworks, engines and software.
                    </h2>
                    <div className='homebuttons'>
                        <a href={cv} download className="cvdownload">
                            <img src={download} alt="" className="btnIcon" />
                        Download CV
                        </a>
                        <a className="learnmore">Learn More</a>
                    </div>
                </div>

                <div className="homeHobbies scroll-area">
                    <h1 className="greeting">Hobbies</h1>
                    <h2 className="introduction">These are my hobbies outside of programming. I enjoy creating unique things, and this is reflected in the activities I pursue. 
                        Some are really interesting, so take a look!
                    </h2>
                    <div className='homebuttons'>
                        <a href={cv} download className="cvdownload">
                            <img src={download} alt="" className="btnIcon" />
                        Download CV
                        </a>
                        <a className="learnmore">Learn More</a>
                    </div>
                </div>

                <div className="homeContact scroll-area">
                    <h1 className="greeting">Contact</h1>
                    <h2 className="introduction">You can find my contact information here to get in touch with me via email, social media, or phone.
                    </h2>
                    <div className='homebuttons'>
                        <a href={cv} download className="cvdownload">
                            <img src={download} alt="" className="btnIcon" />
                        Download CV
                        </a>
                        <a className="learnmore">Learn More</a>
                    </div>
                </div>
        </section>
    )
}

export default Home