import React from 'react';
import './About.css';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faUserFriends, faPalette, faCode } from '@fortawesome/free-solid-svg-icons';
import { faHandshake } from '@fortawesome/free-regular-svg-icons';
import js from '../assets/js.png';
import react from '../assets/react.png';
import angular from '../assets/angular.png';
import css from '../assets/css.png';
import html from '../assets/html.png';
import cSharp from '../assets/c-logo.png';
import dotNet from '../assets/.NET_Core.png';
import node from '../assets/node.png';
import sql from '../assets/sql.png';
import redux from '../assets/redux.png';
import me from '../assets/photo.jpg';
import robot from '../assets/robot.gif';


function About() {
  return (
    <div className="about">
      <Container>
        <div className="about-intro">
          <h3>
            Hi, I'm a Seattle-based developer with a passion for combining technology and art to create intuitive and visually appealing 
            web applications.
          </h3>
          <div className="robot-wrap">
            <img className="robot" src={robot} width="100" height="100"/>
          </div>
        </div>
        <Row>
          <Col sm={9}>
              <Row>
                <div className="about-section-top" id="about-top">
                  <FontAwesomeIcon className="about-icon" icon={faPalette} size="2x" />
                  <h4>Creative Vision</h4>
                </div>
                <div className="about-section-bottom" id="about-bottom">
                  <p>I try to bring a <span className="bold">unique style</span> to everything I build. If you have mock-up and wireframes, I'm happy to help <span className="bold">bring your designs to life</span>. If you'd prefer me to take the lead on design, I'm prepared to <span className="bold">explore possibilities</span> until we find what you're looking for. </p>
                </div>
              </Row>
              <Row>
                <div className="about-section-top" id="about-top">
                  <FontAwesomeIcon className="about-icon" icon={faHandshake} size="2x" />
                  <h4>Interpersonal Skillset</h4>
                </div>
                <div className="about-section-bottom" id="about-bottom">
                  <p>I've worked in the trenches of customer service for almost a decade and understand the impotance of <span className="bold">connecting with customers</span> and <span className="bold">delivering consitant and high-quality experences</span>. </p> 
                </div>
              </Row>
          </Col>
          <Col sm={3}>
            <Row className="about-skill-wrap">
              <div className="about-section-top" id="skills-top">
                <FontAwesomeIcon className="about-icon" icon={faCode} size="2x" /> 
                <h4>Skills</h4>
              </div>
              <div className="skill-section-bottom" id="skills-bottom">
                <div className="about-skill" id="skill-js">
                  <img className="skill-icon" src={js} width="20" height="20"/>
                  <p>JavaScript</p>
                </div>
                <div className="about-skill" id="skill-c">
                  <img className="skill-icon" src={cSharp} width="20" height="20"/>
                  <p>C#</p>
                </div>
                <div className="about-skill" id="skill-react">
                  <img className="skill-icon" src={react} width="20" height="20"/>
                  <p>React</p>
                </div>
                <div className="about-skill">
                  <img className="skill-icon" src={redux} width="20" height="20"/>
                  <p>Redux</p>
                </div>
                <div className="about-skill">
                  <img className="skill-icon" src={html} width="20" height="20"/>
                  <p>HTML</p>
                </div>
                <div className="about-skill">
                  <img className="skill-icon" src={css} width="20" height="20"/>
                  <p>CSS</p>
                </div>
                <div className="about-skill">
                  <img className="skill-icon" src={angular} width="20" height="20"/>
                  <p>Angular</p>
                </div>
                <div className="about-skill">
                  <img className="skill-icon" src={node} width="20" height="20"/>
                  <p>Node</p>
                </div>
                <div className="about-skill">
                  <img className="skill-icon" src={dotNet} width="20" height="20"/>
                  <p>.NET</p>
                </div>
                <div className="about-skill" id="last">
                    <img className="skill-icon" src={sql} width="20" height="20"/>
                    <p>MySQL</p>
                </div>
              </div>
            </Row>
          </Col>
        </Row>
        <Row>
            <div className="about-section-top" id="about-top">
              <FontAwesomeIcon className="about-icon" icon={faUserCircle} size="2x" />
              <h4>About</h4>
            </div>
            <div className="about-section-bottom" id="about-bottom">
              <Row>
              <Col sm={9}>
                <p>Kevin Garvey is a full-stack developer living in Seattle, Washnington. He specialises on front-end and UI development and enjoys dabbilig in digital art and game design in his free time.</p> 
              </Col>
              <Col sm={3}>
                <img className="it-me" src={me} width="130" height="130"/>
              </Col>
              </Row>
            </div>
        </Row>
      </Container>
    </div>
  );
}

export default About;