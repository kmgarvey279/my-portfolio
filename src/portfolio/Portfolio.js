import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Portfolio.css';
import cryostat from '../assets/Capture.PNG';

function Portfolio() {
  return (
    <div className="portfolio">
        <h2>- Portfolio -</h2>
        <Container>
          <Row>
            <Col>
              <div className="project-box">
                <h4>Cryostat</h4>
                <ul>
                  <img src={cryostat} weight="200" height="200"/>
                  <li>A browser-based adventure game built with React.js and Redux. *In progress*</li>
                  <li><a href="">Repo</a></li>
                  <li><a href="">Live</a></li>
                </ul>
              </div>
            </Col>
            <Col>
              <div className="project-box">
                <h4>Dungeon Crawler</h4>
                <ul>
                  <img src={cryostat} weight="200" height="200"/>
                  <li>An RPG/Dungeon exploration game built with JavaScript.</li>
                  <li><a href="">Repo</a></li>
                  <li><a href="">Live</a></li>
                </ul>
              </div>
            </Col>
            <Col>
              <div className="project-box">
                <h4>Book List</h4>
                <ul>
                  <img src={cryostat} weight="200" height="200"/>
                  <li>A virtual booskshelf that lets users save books from the Google Books API and track their reading progress.</li>
                  <li><a href="">Repo</a></li>
                  <li><a href="">Live</a></li>
                </ul>
              </div>
            </Col>
            <Col>
              <div className="project-box">
                <h4>SSBU Character List</h4>
                <ul>
                  <img src={cryostat} weight="200" height="200"/>
                  <li>An interactive list featuring the many playable characters from the Super Smash Brothers series.</li> 
                  <li><a href="">Repo</a></li>
                  <li><a href="">Live</a></li>
                </ul>
              </div>
            </Col>
            <Col>
              <div className="project-box">
                <h4>SSBU Character List</h4>
                <ul>
                  <img src={cryostat} weight="200" height="200"/>
                  <li>An interactive list featuring the many playable characters from the Super Smash Brothers series.</li> 
                  <li><a href="">Repo</a></li>
                  <li><a href="">Live</a></li>
                </ul>
              </div>
            </Col>
            <Col>
              <div className="project-box">
                <h4>SSBU Character List</h4>
                <ul>
                  <img src={cryostat} weight="200" height="200"/>
                  <li>An interactive list featuring the many playable characters from the Super Smash Brothers series.</li> 
                  <li><a href="">Repo</a></li>
                  <li><a href="">Live</a></li>
                </ul>
              </div>
            </Col>
            <Col>
              <div className="project-box">
                <h4>SSBU Character List</h4>
                <ul>
                  <img src={cryostat} weight="200" height="200"/>
                  <li>An interactive list featuring the many playable characters from the Super Smash Brothers series.</li> 
                  <li><a href="">Repo</a></li>
                  <li><a href="">Live</a></li>
                </ul>
              </div>

            </Col>
          </Row>
        </Container>
    </div>
  );
}

export default Portfolio;