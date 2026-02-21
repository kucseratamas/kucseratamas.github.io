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
        <div className="home">
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
            <div className="socialIcons">
                {socialIcons.map((item, index) => (
                    <a key={index} href={item.url}target="_blank" rel="noreferrer">
                    <img src={item.icon} alt={item.alt} className="socialIcon"/>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Home