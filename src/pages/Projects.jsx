import '../components/Projects.css'
import { href } from 'react-router-dom'
import { Link } from "react-router-dom";
import github from '../assets/github.png'
import youtube from '../assets/youtube.png'
import epuletkepek from '../assets/epuletkepek.gif'
import navigation from '../assets/navigation.gif'
import Block from '../components/Block';
import { Canvas } from '@react-three/fiber';
import { Audmax } from '../components/Audmax';
import { OrbitControls } from '@react-three/drei';
import React, { Suspense } from 'react';

const Projects = () => {
    return(
    <div className="projects">
      <div className='projects-header'>
        <h1 className='title'>My Projects</h1>
        <h2 className='subtitle'>Turning ideas into reality, these are my projects that showcase my skills and creativity.</h2>
      </div>
        <section className="feature">
            <div className="feature-text">
              <h1 className='projecttext1'>OE-NIK VR</h1>
              <h2 className='projecttext2'>This project focuses on the photogrammetry-based reconstruction of the interior of the Neumann János Faculty of Informatics at Óbuda University,
                 which is imported into a real-time virtual environment. 
                The scene is optimized and enhanced with interactive elements, and the space can be explored immersively using a VR headset.</h2>
            </div>
            <Block width="845px" height="460px">
            <div className="feature-media">
              <img src={epuletkepek} alt="" />
            </div>
            </Block>
        </section>

        <section className="feature reverse">
          <div className="feature-text">
              <h1 className='projecttext1'>Modelling</h1>
              <h2 className='projecttext2'>During development, different parts of the building had to be created using different methods. 
                Some areas were reconstructed using photogrammetry, while others were manually modeled in Blender. Examples of both approaches are shown here. This is an example of a model that was created using photogrammetry.</h2>
            </div>

              <Block width="845px" height="500px">
                <h4 className='sugo'>*This is an interactable 3D model*</h4>
            <div className="feature-media">
              <Canvas style={{ height: '500px', width: '800px' }}>
                <ambientLight intensity={1} />
                <OrbitControls />
                <Suspense fallback={null}>
                <Audmax />
                </Suspense>
              </Canvas>
            </div>
             </Block>
        </section>

        <section className="feature">
            <div className="feature-text">
              <h1 className='projecttext1'>Navigation</h1>
              <h2 className='projecttext2'>Among the main features is a navigation system based on Dijkstra’s algorithm. 
                Navigation is initiated via the UI: the user selects a target room and presses Start, after which a directional arrow appears and guides them along the shortest path. 
                Upon arrival, the destination is indicated by highlighting the selected room’s door with a flashing effect. 
                Floor transitions within the virtual building are handled through UI-controlled teleportation.</h2>
            </div>
            <Block width="845px" height="500px">
            <div className="feature-media">
              <img src={navigation} alt="" />
            </div>
            </Block>
        </section>
        <h1 className='videotitle'>Full project demonstration video</h1>
        <section className="feature video">
          <div className="video-wrapper">
            <Block width="1280px" height="720px">
            <iframe
            src="https://www.youtube.com/embed/HhQT_6A-rYs?si=jX4F0h9uyPXc297U" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen> 
            </iframe>
            </Block>
          </div>
        </section>
      </div>
    )
}

export default Projects