import { useState } from "react";
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
} from "./ProjectsStyle";
import ProjectCard from "../Cards/ProjectCards";
import { projects } from "../../data/constants";

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("all");
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to android
          apps. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup>
          <ToggleButton
            active={toggle === "all"}
            value="all"
            onClick={() => setToggle("all")}
          >
            All
          </ToggleButton>

          <Divider />
          <ToggleButton
            active={toggle === "Backend"}
            value="Backend"
            onClick={() => setToggle("Backend")}
          >
            Backend
          </ToggleButton>

          <Divider />
          <ToggleButton
            active={toggle === "Frontend"}
            value="Frontend"
            onClick={() => setToggle("Frontend")}
          >
            Frontend
          </ToggleButton>

          <Divider />
          <ToggleButton
            active={toggle === "Fullstack"}
            value="Fullstack"
            onClick={() => setToggle("Fullstack")}
          >
            Fullstack
          </ToggleButton>
          <Divider />
          <ToggleButton
            active={toggle === "IoT"}
            value="IoT"
            onClick={() => setToggle("IoT")}
          >
            IoT
          </ToggleButton>
          <Divider />
          <ToggleButton
            active={toggle === "AI Integration"}
            value="AI Integration"
            onClick={() => setToggle("AI Integration")}
          >
            AI Integration
          </ToggleButton>
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === "all" &&
            projects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
          {projects
            .filter((item) => item.category.includes(toggle))
            .map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
