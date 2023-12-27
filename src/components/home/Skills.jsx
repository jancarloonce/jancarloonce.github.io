import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import SkillsTab from "./SkillsTab";
import Row from "react-bootstrap/Row";
import { Jumbotron } from "./migration";
import { Container } from "react-bootstrap";
import { useScrollPosition } from "../../hooks/useScrollPosition";

const Skills = React.forwardRef(({ heading, skills }, ref) => {
  const skillsTabRef = React.useRef(null);
  const [isScrolled, setIsScrolled] = React.useState(false);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!isScrolled && currPos.y - 400 < 0) setIsScrolled(true);
    },
    [],
    skillsTabRef
  );

  return (
    <Jumbotron ref={skillsTabRef} fluid className="bg-white m-0" id="skills">
      <Container className="p-1"> {/* Adjust the padding value here */}
        <h2 ref={skillsTabRef} className="display-4 pb-3 text-center">
          {heading}
        </h2>
        <Tabs
          className="skills-tabs"
          defaultActiveKey="skills-0" // Set the default active tab to "skills-0"
          id="skills-tabs"
          fill
        >
          {skills.map((skillCategory, index) => (
            <Tab
              key={index}
              tabClassName="skills-tab lead"
              eventKey={`skills-${index}`}
              title={skillCategory.category}
            >
              <Row className="pt-2 px-1">
                <SkillsTab skills={skillCategory.skills} isScrolled={isScrolled} />
              </Row>
            </Tab>
          ))}
        </Tabs>
      </Container>
    </Jumbotron>
  );
});

export default Skills;
