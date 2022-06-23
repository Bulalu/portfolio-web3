import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a builder who is obsessed in using cutting edge Technologies to solve challenging problems and some fun scenarios.
              <br />
              <br /> So, currently I can work with 
              <i>
                <b className="purple"> Smart Contracts, EVM Compatible BlockChains, Python, DeFi, NFTs, DAOs. {" "} </b>
              </i>
              Looking forward to expand my reach into other BlockChains in the near future
              <br />
              <br />
              Currently my field of interest is in the &nbsp;
              <i>
                <b className="purple">BlockChain </b> space as you might have noticed 😁 and
                also in areas related to{" "}
                <b className="purple">
                  Machine Learning and AI {" "}
                </b>
                 beep boop
              </i>
              <br />
              <br />
              Whenever possible, I like to contribute on different open source projects esp 
              on <b className="purple">DeFi</b> and
              <i>
                <b className="purple">
                  {" "}
                  ML
                </b>
              </i>
              &nbsp; so if you got something cool hit me up!
             
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me, I promise I'm cool  🤞
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Bulalu"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/elisha_bulalu"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/elisha-bulalu/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
