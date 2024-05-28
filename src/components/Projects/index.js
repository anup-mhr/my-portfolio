import React from "react";
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
          {toggle === "all" ? (
            <ToggleButton active value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          ) : (
            <ToggleButton value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          )}
          <Divider />
          {toggle === "React App" ? (
            <ToggleButton
              active
              value="React App"
              onClick={() => setToggle("React App")}
            >
              React APP's
            </ToggleButton>
          ) : (
            <ToggleButton
              value="React App"
              onClick={() => setToggle("React App")}
            >
              React APP's
            </ToggleButton>
          )}
          <Divider />
          {toggle === "Node App" ? (
            <ToggleButton
              active
              value="Node App"
              onClick={() => setToggle("Node App")}
            >
              Node APP's
            </ToggleButton>
          ) : (
            <ToggleButton
              value="Node App"
              onClick={() => setToggle("Node App")}
            >
              Node APP's
            </ToggleButton>
          )}
          <Divider />
          {toggle === "Mern App" ? (
            <ToggleButton
              active
              value="Mern App"
              onClick={() => setToggle("Mern App")}
            >
              Mern App's
            </ToggleButton>
          ) : (
            <ToggleButton
              value="Mern App"
              onClick={() => setToggle("Mern App")}
            >
              Mern App's
            </ToggleButton>
          )}
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
            .filter((item) => item.category === toggle)
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
