import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Aayush Sawant </span>
            from <span className="purple"> Mumbai, India.</span>
            <br /> I have done my bachelors in Electronics and Telecommunications engineering from 
             <span className="purple"> College of Engineering, Pune </span>  
             and I have 
            graduated in 2021.
            <br />
            I am a self taught developer and I have worked at eQ Technologic as a software Engineer for 2 years(Aug 2021- Aug 2023).
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing and watching cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading about history and world geopolitics
            </li>
            <li className="about-activity">
              <ImPointRight /> Cycling
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring the heritage and legacy of Bombay
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Pain of discipline is greater than pain of regret"{" "}
          </p>
          <footer className="blockquote-footer">Aayush</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;