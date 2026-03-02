import '../components/Hobbies.css'
import { href } from 'react-router-dom'
import { Link } from "react-router-dom";
import kalimbainstagram from '../assets/instagram.png'
import kalimbayoutube from '../assets/youtube.png'
import kalimbatiktok from '../assets/tiktok.png'
import Block from "../components/Block";
import { useEffect } from "react";

import baldsmiley from '../assets/Arts/baldsmiley.png'
import face1 from '../assets/Arts/face1.png'
import face2s from '../assets/Arts/face2s.png'
import face4 from '../assets/Arts/face4.png'
import SmileyCollection from '../assets/Arts/SmileyCollection.png'
import Monitordark from '../assets/Arts/Monitordark.png'
import MoonLight from '../assets/Arts/MoonLight.png'
import Redbubble from '../assets/redbubble.png'
import musicproduction from '../assets/musicproduction.gif'


const Hobbies = () => {
    useEffect(() => {
    if (window.instgrm) {
        window.instgrm.Embeds.process();
    }
}, []);
    const socialIcons = [
            {icon: kalimbainstagram, alt: 'Instagram', url: 'https://www.instagram.com/mykalimbajourneyy'},
            {icon: kalimbayoutube, alt: 'YouTube', url: 'https://www.youtube.com/@MyKalimbaJourney'},
            {icon: kalimbatiktok, alt: 'TikTok', url: 'https://www.tiktok.com/@mykalimbajourneyy'}, 
        ]
        
    return(
        <section className='hobbiespage'>
                <div className="kalimba scroll-area">
                    <h1 className="greeting">Playing the Kalimba</h1>
                    <h2 className="introduction kalimbaintroduction">Music plays an important role in my life. One of my hobbies is playing musical instruments, particularly the kalimba. 
                      I learn and perform various songs, record them, and upload the videos to a dedicated YouTube channel where I share my covers.
                    </h2>
                    <div className='contentslider'>
                        <div className='contentslider-track'>

                            <a href="https://www.youtube.com/watch?v=2Olsfhluqc4" target="_blank" rel="noopener noreferrer" className='card'>
                            <img className="thumbnail" src="https://img.youtube.com/vi/2Olsfhluqc4/hqdefault.jpg" alt="Bilewater" />
                            <p className='covername'>Bilewater - Hollow Knight: Silksong OST (kalimba)</p>
                            </a>
                            

                            <a href="https://www.youtube.com/watch?v=02598m60-7w" target="_blank" rel="noopener noreferrer" className='card'>
                            <img className="thumbnail" src="https://img.youtube.com/vi/02598m60-7w/hqdefault.jpg" alt="Carol of the Bells" />
                            <p className='covername'>Carol of the Bells - kalimba cover</p>
                            </a>
                           

                            <a href="https://www.youtube.com/watch?v=uILTjIU2uw0" target="_blank" rel="noopener noreferrer"  className='card'>
                            <img className="thumbnail" src="https://img.youtube.com/vi/uILTjIU2uw0/hqdefault.jpg" alt="Moonlight Sonata" />
                            <p className="covername">Beethoven - Moonlight Sonata (kalimba)</p>
                            </a>
                            

                            <a href="https://www.youtube.com/watch?v=l2Yw1PHBJEU" target="_blank" rel="noopener noreferrer" className='card'>
                            <img className="thumbnail" src="https://img.youtube.com/vi/l2Yw1PHBJEU/hqdefault.jpg" alt="Infinity Castle Theme" />
                            <p className="covername">Infinity Castle Theme on kalimba | Demon Slayer</p>
                            </a>
                            

                            <a href="https://www.youtube.com/watch?v=fUzHGYC3P8I" target="_blank" rel="noopener noreferrer" className='card'>
                            <img className="thumbnail" src="https://img.youtube.com/vi/fUzHGYC3P8I/hqdefault.jpg" alt="River Flows In You" />
                             <p className="covername">Yiruma - River Flows In You (Kalimba Tutorial)</p>
                            </a>
                           

                            <a href="https://www.youtube.com/watch?v=FsXcQY49iOU" target="_blank" rel="noopener noreferrer" className='card'>
                            <img className="thumbnail" src="https://img.youtube.com/vi/FsXcQY49iOU/hqdefault.jpg" alt="Unboxing Kalimba" />
                             <p className="covername">Unboxing My First Kalimba</p>
                            </a>
                           

                            
                            <a href="https://www.youtube.com/watch?v=2Olsfhluqc4" target="_blank" rel="noopener noreferrer" className='card'>
                            <img className="thumbnail" src="https://img.youtube.com/vi/2Olsfhluqc4/hqdefault.jpg" alt="Bilewater" />
                            <p className='covername'>Bilewater - Hollow Knight: Silksong OST (kalimba)</p>
                            </a>
                            

                            <a href="https://www.youtube.com/watch?v=02598m60-7w" target="_blank" rel="noopener noreferrer" className='card'>
                            <img className="thumbnail" src="https://img.youtube.com/vi/02598m60-7w/hqdefault.jpg" alt="Carol of the Bells" />
                            <p className="covername">Carol of the Bells - kalimba cover</p>
                            </a>
                            

                            <a href="https://www.youtube.com/watch?v=uILTjIU2uw0" target="_blank" rel="noopener noreferrer"  className='card'>
                            <img className="thumbnail" src="https://img.youtube.com/vi/uILTjIU2uw0/hqdefault.jpg" alt="Moonlight Sonata" />
                            <p className="covername">Beethoven - Moonlight Sonata (kalimba)</p>
                            </a>
                            

                            <a href="https://www.youtube.com/watch?v=l2Yw1PHBJEU" target="_blank" rel="noopener noreferrer" className='card'>
                            <img className="thumbnail" src="https://img.youtube.com/vi/l2Yw1PHBJEU/hqdefault.jpg" alt="Infinity Castle Theme" />
                            <p className="covername">Infinity Castle Theme on kalimba | Demon Slayer</p>
                            </a>
                            
                            <a href="https://www.youtube.com/watch?v=fUzHGYC3P8I" target="_blank" rel="noopener noreferrer" className='card'>
                            <img className="thumbnail" src="https://img.youtube.com/vi/fUzHGYC3P8I/hqdefault.jpg" alt="River Flows In You" />
                            <p className="covername">Yiruma - River Flows In You (Kalimba Tutorial)</p>
                            </a>

                             <a href="https://www.youtube.com/watch?v=FsXcQY49iOU" target="_blank" rel="noopener noreferrer" className='card'>
                            <img className="thumbnail" src="https://img.youtube.com/vi/FsXcQY49iOU/hqdefault.jpg" alt="Unboxing Kalimba" />
                            <p className="covername">Unboxing My First Kalimba</p>
                            </a>
                            
                        </div>
                    </div>
                <div className="socialIcons">
                    {socialIcons.map((item, index) => (
                        <a key={index} href={item.url}target="_blank" rel="noreferrer">
                            <div className='icon-wrapper'>
                                <img src={item.icon} alt={item.alt} className="socialIcon"/>
                            </div>
                        </a>
                    ))}
                </div>
                    
                </div>

                <div className="piano scroll-area">
                    <div className="piano-flex">
                    <div className="piano-text">
                        <h1 className="greeting"><span>Playing the Piano</span></h1>
                        <h2 className="introduction">Another instrument I enjoy playing is the piano. 
                            I like learning my favorite songs and performing them, and 
                            I often use piano covers as a reference when creating kalimba arrangements, as it is easier to identify the notes on the piano and adapt them for the kalimba.
                        </h2>
                    </div>
                        <div className="insta-wrapper">
                        <blockquote 
                            className="instagram-media" 
                            data-instgrm-permalink="https://www.instagram.com/p/CdQ8V8zNa_G/?utm_source=ig_embed&amp;utm_campaign=loading"
                            data-instgrm-version="14" 
                            style={{
                                background: "#FFF",
                                border: "0",
                                borderRadius: "50px",
                                boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                                margin: "1px auto",
                                maxWidth: "540px",
                                minWidth: "326px",
                                padding: "0",
                                width: "99.375%",

                            }}
                            ></blockquote>
                        </div>
                    </div>
                </div>
                
                <div className="vectorart scroll-area">
                    <h1 className="greeting">Vector Art</h1>
                    <h2 className="introduction vectorintroduction">Lately, I’ve developed a passion for creating vector art in my free time. Using Adobe Illustrator, I design creative stickers and various other artworks that I integrate into my projects, you can even see a few examples right here on this website. 
                        I also use them for custom profile backgrounds and digital assets. I create under the artist name Instincto, and I’ve recently launched my own shop on Redbubble and Teepublic to share my work with a wider audience.
                    </h2>

                    <div className='contentslider'>
                        <div className='contentslider-track'>

                            <a href="https://www.redbubble.com/shop/ap/178508842" target="_blank" rel="noopener noreferrer" className='artcard'>
                            <img className="thumbnail" src={baldsmiley} alt="baldsmiley" />
                            <p className='covername'>Bald Smiley Sticker</p>
                            </a>

                            <a target="_blank" rel="noopener noreferrer" className='artcard'>
                            <img className="thumbnail" src={Monitordark} alt="Monitor" />
                            <p className='covername'>Instincto Monitor</p>
                            </a>

                            <a href="https://www.redbubble.com/shop/ap/178480942" target="_blank" rel="noopener noreferrer" className='artcard'>
                            <img className="thumbnail" src={face1} alt="face1" />
                            <p className='covername'>Farmer Smiley Sticker</p>
                            </a>

                            <a target="_blank" rel="noopener noreferrer" className='artcard'>
                            <img className="thumbnail" src={SmileyCollection} alt="SmileyCollection" />
                             <p className="covername">Smiley Sticker Collection</p>
                            </a>   

                            <a href="https://www.redbubble.com/shop/ap/178489672" target="_blank" rel="noopener noreferrer"  className='artcard'>
                            <img className="thumbnail" src={face2s} alt="face2s" />
                            <p className="covername">Dripped Out Smiley Sticker</p>
                            </a>

                            <a href="https://www.redbubble.com/shop/ap/178555694" target="_blank" rel="noopener noreferrer"  className='artcard'>
                            <img className="thumbnail" src={MoonLight} alt="MoonReflection" />
                            <p className="covername">Moon Reflection Art</p>
                            </a>        

                            <a href="https://www.redbubble.com/shop/ap/178509505" target="_blank" rel="noopener noreferrer" className='artcard'>
                            <img className="thumbnail" src={face4} alt="face4" />
                            <p className="covername">Smiley with Goku hair Sticker</p>
                            </a>



                            <a href="https://www.redbubble.com/shop/ap/178508842" target="_blank" rel="noopener noreferrer" className='artcard'>
                            <img className="thumbnail" src={baldsmiley} alt="baldsmiley" />
                            <p className='covername'>Bald Smiley Sticker</p>
                            </a>

                            <a target="_blank" rel="noopener noreferrer" className='artcard'>
                            <img className="thumbnail" src={Monitordark} alt="Monitor" />
                            <p className='covername'>Instincto Monitor</p>
                            </a>

                            <a href="https://www.redbubble.com/shop/ap/178480942" target="_blank" rel="noopener noreferrer" className='artcard'>
                            <img className="thumbnail" src={face1} alt="face1" />
                            <p className='covername'>Farmer Smiley Sticker</p>
                            </a>

                            <a target="_blank" rel="noopener noreferrer" className='artcard'>
                            <img className="thumbnail" src={SmileyCollection} alt="SmileyCollection" />
                             <p className="covername">Smiley Sticker Collection</p>
                            </a>   

                            <a href="https://www.redbubble.com/shop/ap/178489672" target="_blank" rel="noopener noreferrer"  className='artcard'>
                            <img className="thumbnail" src={face2s} alt="face2s" />
                            <p className="covername">Dripped Out Smiley Sticker</p>
                            </a>

                            <a href="https://www.redbubble.com/shop/ap/178555694" target="_blank" rel="noopener noreferrer"  className='artcard'>
                            <img className="thumbnail" src={MoonLight} alt="MoonReflection" />
                            <p className="covername">Moon Reflection Art</p>
                            </a>        

                            <a href="https://www.redbubble.com/shop/ap/178509505" target="_blank" rel="noopener noreferrer" className='artcard'>
                            <img className="thumbnail" src={face4} alt="face4" />
                            <p className="covername">Smiley with Goku hair Sticker</p>
                            </a>
                            
                            
                        </div>
                    </div>

                    <a href="https://www.redbubble.com/people/Inst1ncto/shop?asc=u" target="_blank" rel="noreferrer">
                            <div className='icon-wrapper'>
                                <img src={Redbubble} alt="redbubble" className="socialIcon"/>
                            </div>
                        </a>

                </div>

                 <div className="musicediting scroll-area">
                    <div className="music-flex">
                        <div className="music-text">
                            <h1 className="greeting">Music Production</h1>
                            <h2 className="introduction">Music production is another passion of mine. Using Ableton Live Lite, 
                                I craft Lo-Fi tracks, and I’ve featured two of my original pieces directly on this site. Click the speaker icon to toggle the audio. 
                                The soundtrack is context-aware: featuring a chill evening vibe for Dark Mode and a bright and sunny feel for Light Mode. 
                                I'm also planning to launch a YouTube channel soon, where I'll be sharing more of my music!
                            </h2>
                            </div>
                            <div className="musicproduction-wrapper">
                                <img className='musicproductionimg' src={musicproduction} alt="" />
                                </div>
                    </div>
                </div>

        </section>
    )
}

export default Hobbies