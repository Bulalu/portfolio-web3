import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import editor from "../../Assets/Projects/codeEditor.png";
import nft from "../../Assets/Projects/nft.png";
import domain from "../../Assets/Projects/domain.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import dao from "../../Assets/Projects/dao.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dao}
              isBlog={false}
              title="YoDAO"
              description="A DAO project where users can participate on governance acts such as voting and creating proposals. Only members who hold the DAO NFT token will be eligible to join. The NFT can be minted for free on the app"
              link="https://yo-dao.vercel.app/"
            />
          </Col>
          

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Savor"
              description="We(Me and My Team) created Savor as our ChainLink Spring Project Hackathon.Savor is a cross-chain stable coin yield aggregator or the simplest DeFi savings account with risk spread across different chains and protocols."
              link="https://savor-ui.netlify.app/home"
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={domain}
              isBlog={false}
              title="Ace Name Service"
              description="Similar to Ethereum Name Service, you can mint your own domain as NFT, this was one of my buildspace project"
              link="https://savor-ui.netlify.app/home"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nft}
              isBlog={false}
              title="Funny NFT"
              description="A project where a user can a NFT which generates a set of random words, this is also the NFT required to participate on the YoDAO governance"
              link="https://iconics-nft.vercel.app/"
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
