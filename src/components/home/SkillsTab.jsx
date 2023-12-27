import React from "react";
import Col from "react-bootstrap/Col";
import SkillsBar from "./SkillsBar";

function SkillsTab({ skills, isScrolled }) {
  // Ensure that skills is defined or use an empty array
  const skillsArray = skills || [];

  // Calculate the midpoint index of the skills array
  const midpointIndex = Math.floor(skillsArray.length / 2);

  return (
    <>
      <Col xs={12} md={6}>
        {skillsArray.slice(0, midpointIndex).map((skill, index) => (
          <SkillsBar
            key={`${skill.name}-${index}`}
            skill={skill.name}
            value={skill.value}
            isScrolled={isScrolled}
          />
        ))}
      </Col>
      <Col xs={12} md={6}>
        {skillsArray.slice(midpointIndex).map((skill, index) => (
          <SkillsBar
            key={`${skill.name}-${index}`}
            skill={skill.name}
            value={skill.value}
            isScrolled={isScrolled}
          />
        ))}
      </Col>
    </>
  );
}

export default SkillsTab;
