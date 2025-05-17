import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import pg from "../assets/projects/pg.png";
import project from "../assets/projects/project.jpeg";
import lift from "../assets/projects/lift.png";
import krypto from "../assets/projects/krypto.png";
import kickstart from "../assets/projects/kickstart.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've recently done.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lift}
              isBlog={false}
              title="React2give"
              description="This application, designed both on the client side by React JS and on the server side by Firebase, is the interactive interface linking the graduates of Meenakshi Sundararajan Engineering College to the IITS Trust, a charitable organization committed to supporting the philanthropic endeavors. "
              ghLink="https://github.com/Cherisha2023/MSEC"
              demoLink=" https://mseciits.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project}
              isBlog={false}
              title="Blog Python"
              description="A blog application in python using Flask."
              ghLink="https://github.com/Cherisha2023/python-blog"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title=" Japanese Hiragana learning app"
              description="A sleek and interactive Japanese learning app built with React JS for a dynamic user experience.
Styled with Tailwind CSS for a modern, responsive, and clean UI.
This app helps learners master Hiragana characters through engaging quizzes and a user-friendly interface."
              ghLink="https://github.com/Cherisha2023/Japmaster-Hiragana?tab=readme-ov-file"
              demoLink="https://japanese-hiragana.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pg}
              isBlog={false}
              title="Github Profile Finder"
              description="A simple web application that allows users to search for GitHub profiles and view basic information including followers, following count, and repositories."
              ghLink="https://github.com/Cherisha2023/GitHub_profile_finder"
              demoLink="https://github-profile-fi.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={krypto}
              isBlog={false}
              title="Text to Speech Converter"
              description="Project Krypto is a Web 3 project that utilizes an Ethereum smart contract created using Solidity. It allows users to interact with their Metamask wallet and send Ethereum."
              ghLink="https://github.com/Cherisha2023/text-to-speech-converter"
              demoLink="https://ttexttospeechh.netlify.app/"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  )
}

export default Projects