import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Portfolio.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';
import { faFileCode } from '@fortawesome/free-solid-svg-icons';
import cryostat from '../assets/Capture.PNG';

function Portfolio() {
  return (
    <div className="portfolio">
        <h2>- Portfolio -</h2>
        <Container>
              <Row>
                  <div className="project-box">
                    <Row>
                    <div className="project-info">
                        <h4>Cryostat</h4>
                    </div>
                    </Row>
                    <Row>
                        <img src={cryostat}/>
                    </Row>
                    <Row>
                      <div className="project-links">
                        <a href=""><FontAwesomeIcon icon={faFileCode} size="md" /> Repo</a>
                        <a href=""><FontAwesomeIcon icon={faLaptop} size="md" /> Live</a>
                      </div>
                    </Row>
                  </div>
              </Row>
        </Container>
    </div>
  );
}

export default Portfolio;