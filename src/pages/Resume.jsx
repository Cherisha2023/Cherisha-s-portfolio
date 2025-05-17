import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";

import Particle from '../components/Particle';
import pdf from "../assets/cherisha.pdf";

const Resume = () => {
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        {/* Download Button (Bottom) */}
        <Row style={{ justifyContent: "center", position: "relative", marginTop: "20px" }}>
          <a href={pdf} download="cherisha_resume.pdf">
            <Button variant="primary" style={{ maxWidth: "250px" }}>
              <AiOutlineDownload />
              &nbsp;Download Resume
            </Button>
          </a>
        </Row>
      </Container>
    </div>
  );
};

export default Resume;
