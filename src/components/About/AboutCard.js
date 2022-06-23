import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, I am <span className="purple">Elisha Bulalu </span>
            from <span className="purple"> Dar-es-Salaam, Tanzania.</span>
            
            <br />I am a Python and Smart Contract dev, currently I work as a {" "}
            <a 
                href="https://www.upwork.com/freelancers/~01a4d9f568b128479a" 
                className="purple" target="_blank"
                rel="noreferrer">
              freelancer
            </a>.
            <br />
            <br />
          
            here's what I like to do when I'm not  staring at my screen 🧑‍💻

          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Gaming
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling (I promise to start this when I'm rich  😂)
            </li>
            <li className="about-activity">
              <ImPointRight /> Make some beats (told ya I was cool  😎)
            </li>
            <li className="about-activity">
              <ImPointRight /> Sleeping
            </li>
          </ul>

          
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
