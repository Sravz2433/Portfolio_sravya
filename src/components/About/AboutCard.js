import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sravya Sri Mallampalli</span>
            from <span className="purple">Sricity, Andhra Pradesh, India.</span>
            <br />
            I am a pre-final year student at the Indian Institute of Information Technology, Sricity,
            pursuing B.Tech in Computer Science and Engineering.
            <br />
            I am deeply passionate about <b className="purple">Machine Learning, Deep Learning, and Bioinformatics</b>,
            focusing on genomic data analysis and computational biology.
            <br />
            <br />
            Apart from research and coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading Scientific Papers
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring New Technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Technical Blogs
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to innovate and contribute to the world of bioinformatics!"{" "}
          </p>
          <footer className="blockquote-footer">Sravya Sri Mallampalli</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
