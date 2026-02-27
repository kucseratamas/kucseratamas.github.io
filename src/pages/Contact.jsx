import React from "react";
import '../components/Contact.css'
import Block from "../components/Block";
import instagram from '../assets/instagram.png'
import youtube from '../assets/youtube.png'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
import facebook from '../assets/facebook.png'
import email from '../assets/Email.png'

const Contact = () => {
    const icons = [
      {icon: instagram, alt: 'Instagram', url: 'https://www.instagram.com/kucsi_tomi/'},
      {icon: linkedin, alt: 'LinkedIn', url: 'https://www.linkedin.com/in/tam%C3%A1s-kucsera/'},
      {icon: youtube, alt: 'YouTube', url: 'https://youtube.com/@instincto_o?si=j9Fawh0rLxFy45qm'},
      {icon: github, alt: 'GitHub', url: 'https://github.com/kucseratamas'},
      {icon: facebook, alt: 'Facebook', url:'https://www.facebook.com/tamas.kucsera.31/?locale=hu_HU'},
      {icon: email, alt: 'Email', url:'https://mail.google.com/mail/?view=cm&to=kucsitomika@gmail.com&su=Kapcsolat&body=Szia%20Tamás!'},
    ];
  return(
    <div className="contact">
        <div className="contact-header">
            <h1 className="title">Contact Me</h1>
            <h2 className="subtitle">Here are the platforms where you can get in touch with me.</h2>
        </div>
        <div className="insidemonitor">
        <div className="socialIcons">
            {icons.map((item, index) => (
              <a key={index} href={item.url} target="_blank" rel="noreferrer">
                <img src={item.icon} alt={item.alt} className="socialIcon" />
              </a>
            ))}
          </div>
          <div className='textinfo'>
            <h2 className="contacttitle">Contact information</h2>
            <p>Name: Kucsera Tamás</p>
            <p>E-mail: kucsitomika@gmail.com</p>
            <p>Phone number: +36 20 395 5304</p>
          </div>
        </div>
    </div>
  );
}
export default Contact