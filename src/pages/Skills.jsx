import React from "react";
import '../components/Skills.css'
import Block from "../components/Block";
import SkillContent from "../components/SkillContent";
import csharp from "../assets/csharp.png";
import javascript from "../assets/javascript.gif";
import java from "../assets/java.gif";
import html5 from "../assets/html5.png";
import react from "../assets/react.png";
import css from "../assets/css.png";
import vite from "../assets/vite.png";
import reactnative from "../assets/reactnative.png";
import githubdesktop from "../assets/githubdesktop.png";
import github from "../assets/github.png";
import visualstudio from "../assets/visualstudio.png";
import vscode from "../assets/vscode.png";
import git from "../assets/git.png";
import sourcetree from "../assets/sourcetree.png";
import intellijidea from "../assets/intellijidea.png";
import blender from "../assets/blender.png";
import unity from "../assets/unity.png";
import davinciresolve from "../assets/davinciresolve.png";
import adobeillustrator from "../assets/adobeillustrator.png";
import ableton from "../assets/abletonlive.png";
import kdenlive from "../assets/kdenlive.png";
import agisoft from "../assets/agisoftmetashape.png";

const Skills = () => {
    const languages = [
    { name: "C#", percent: 80, color: "#ff3c00", logo: csharp },
    { name: "JavaScript", percent: 70, color: "#ff9b3e", logo: javascript },
    { name: "Java", percent: 50, color: "#f1d78f", logo: java},
    ];
  const frameworkstoolswebtechnologies = [
    { name: "HTML5", percent: 70, color: "#0053c0", logo: html5} ,
    { name: "React", percent: 60, color: "#00a2ff", logo: react},
    { name: "CSS", percent: 60, color: "#00a2ff", logo: css},
    { name: "Vite", percent: 60, color: "#00a2ff", logo: vite},
    { name: "React Native", percent: 40, color: "#96e8ff", logo: reactnative},
    { name: "Github Desktop", percent: 95, color: "#0b0164", logo: githubdesktop},
    { name: "GitHub", percent: 90, color: "#0f0192", logo: github},
    { name: "Visual Studio", percent: 90, color: "#0f0192", logo: visualstudio},
    { name: "VS Code", percent: 85, color: "#001dc0", logo: vscode},
    { name: "Git", percent: 85, color: "#001dc0", logo: git},
    { name: "Sourcetree", percent: 85, color: "#001dc0", logo: sourcetree},
    { name: "Intellij IDEA", percent: 70, color: "#0053c0", logo: intellijidea},
    
];
const others = [
    { name: "Blender", percent: 60, color: "#00c6ff", logo: blender},
    { name: "Unity", percent: 70, color: "#00c6ff", logo: unity},
    { name: "Davinci Resolve", percent: 85, color: "#00c6ff", logo: davinciresolve},
    { name: "Adobe Illustrator", percent: 60, color: "#00c6ff", logo: adobeillustrator},
    { name: "Agisoft Metashape", percent: 70, color: "#00c6ff", logo: agisoft},
    { name: "Kdenlive", percent: 75, color: "#00c6ff", logo: kdenlive },
    { name: "Ableton Live", percent: 65, color: "#00c6ff", logo: ableton },
];
  return(
    <div className="skills">
        <div className="skills-header">
            <h1 className="title">My Skills</h1>
            <h2 className="subtitle">Technologies and tools I use to build projects</h2>
        </div>
        <h2 className="section">Languages</h2>
        <div className="skills-row">
            {languages.map((skill, i) => (
            <Block key={i} className="skill-card">
                <SkillContent skill={skill} />
            </Block>
            ))}
        </div>

        <h2 className="section">Frameworks / Tools / Web</h2>
        <div className="skills-row sr2">
            {frameworkstoolswebtechnologies.map((skill, i) => (
            <Block key={i} className="skill-card">
                <SkillContent skill={skill} />
            </Block>
            ))}
        </div>

        <h2 className="section">Others</h2>
        <div className="skills-row">
            {others.map((skill, i) => (
            <Block key={i} className="skill-card">
                <SkillContent skill={skill} />
            </Block>
            ))}
        </div>

    </div>
  );
}
export default Skills