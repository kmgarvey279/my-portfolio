import React from 'react';
import './About.css';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { faPalette } from '@fortawesome/free-solid-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
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


function About() {
  return (
    <div className="about">
      <Container>
        <Row>
          <Col>
            <div className="about-intro">
              <h4>Hi, I'm a full-stack developer with a passion for crafting intuitive and visually appealing user experences. </h4>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={8}>
            <Row>
              <div className="about-section-top" id="about-top">
                <FontAwesomeIcon className="about-icon" icon={faPalette} size="2x" />
                <h4>Creative Vision</h4>
              </div>
              <div className="about-section-bottom" id="about-bottom">
                <p>I'm passionate about design and handcrafting appealing and intuitive user experences.</p>
              </div>
            </Row>
            <Row>
              <div className="about-section-top" id="about-top">
                <FontAwesomeIcon className="about-icon" icon={faUserFriends} size="2x" />
                <h4>Interpersonal Skillset</h4>
              </div>
              <div className="about-section-bottom" id="about-bottom">
                <p>I've worked in the trenches of customer service for almost a decade and know how important...</p> 
              </div>
            </Row>
          </Col>
          <Col sm={4}>
            <div className="about-section-top" id="skills-top">
              <FontAwesomeIcon className="about-icon" icon={faCode} size="2x" /> 
              <h4>Skills</h4>
            </div>
            <div className="about-section-bottom" id="skills-bottom">
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
              <div className="about-skill">
                <img className="skill-icon" src={sql} width="20" height="20"/>
                <p>MySQL</p>
              </div>
            </div>
          </Col>
        </Row>
        <Row>

        </Row>
      </Container>
    </div>
  );
}

export default About;