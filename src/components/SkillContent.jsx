import React from "react";
import '../components/Skills.css'

function SkillContent({ skill }) {
  return (
    <div className="skill-content">

      <div className="skill-header">
        <img src={skill.logo} alt="" className="iconlogo" />
        <h3 className="skill-title">{skill.name}</h3>
      </div>

      <div className="skill-row">
        <span>Proficiency</span>
        <span> {skill.percent}%</span>
      </div>

      <div className="progress">
        <div
          className="progress-fill"
          style={{
            width: `${skill.percent}%`,
            background: skill.color,
          }}
        />
      </div>
    </div>
  );
}
export default SkillContent