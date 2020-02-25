import React from 'react';
import './About.css';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { faPalette } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';

function About() {
  return (
    <div className="about">
      <Container>
        <Row>
          <Col>
            <p>Hi, I'm a full-stack developer with a passion for crafting intuitive and visually appealing user experences. </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="about-section-top">
              <FontAwesomeIcon className="about-icon" icon={faCode} size="2x" /> 
              <h4>Technical Know-how</h4>
            </div>
            <div className="about-section-bottom">
              <p>...</p>
            </div>
          </Col>
          <Col>
            <div className="about-section-top">
              <FontAwesomeIcon className="about-icon" icon={faPalette} size="2x" />
              <h4>Creative Vision</h4>
            </div>
            <div className="about-section-bottom">
              <p>I'm passionate about design and handcrafting appealing and intuitive user experences.</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="about-section-top">
              <FontAwesomeIcon className="about-icon" icon={faUserFriends} size="2x" />
              <h4>Interpersonal Skillset</h4>
            </div>
            <div className="about-section-bottom">
              <p>I've worked in the trenches of customer service for almost a decade and know how important...</p> 
            </div>
          </Col>
          <Col>
            <div className="about-section-top">
              <FontAwesomeIcon className="about-icon" icon={faHeart} size="2x" />
              <h4>Personal Integrity</h4>
            </div>
            <div className="about-section-bottom">
              <p>I'm commited to producing the best possible final product, but also recognise that reality is messy and trade-offs are inevitable.</p> 
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;