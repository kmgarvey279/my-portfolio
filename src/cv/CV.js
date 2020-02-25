import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './CV.css';

function CV() {
  return (
    <div className="cv">
        <Container>
        <div className="cv-section">
          <Row>
            <Col>
              <div className="cv-header">
                <h5>SKILLS</h5>
              </div>
              <Row>
                <Col>
                  JavaScript
                </Col>
                <Col>
                  React
                </Col>
                <Col>
                  Angular
                </Col>
                <Col>
                  C#
                </Col>
              </Row>
              <Row>
                <Col>
                  CSS
                </Col>
                <Col>
                  jQuery
                </Col>
                <Col>
                  Git
                </Col>
                <Col>
                  .NET
                </Col>
              </Row>
              <Row>
                <Col>
                  SQL
                </Col>
                <Col>
                  Webpack
                </Col>
                <Col>
                  Node.js
                </Col>
                <Col>
                  Bootstrap
                </Col>
              </Row>
              <Row>
                <Col>
                  MVC
                </Col>
                <Col>
                  UI
                </Col>
                <Col>
                  Data Visualization
                </Col>
                <Col>
                  Browser Extensions
                </Col>
              </Row>
              <Row>
                <Col>
                  Debug Testing
                </Col>
                <Col>
                  Postman
                </Col>
                <Col>
                  APIs
                </Col>
                <Col>
                  AJAX
                </Col>
              </Row>
            </Col>
          </Row> 
        </div>

        <div className="cv-section">
          <Row>
            <Col>
              <div className="cv-header">
                <h5>EXPERENCE</h5>
              </div>
              <div className="cv-item">
                <span className="cv-title">Debug Tester</span><br/>
                <span className="cv-location">Parker Staffing, Redmond, WA, 2019 - 2020</span>
                <ul>
                  <li>Worked as part of 10 person team to identify and document software bugs</li>
                  <li>Collaborated with Nintendo of America software developers to ensure product quality</li>
                </ul>      
              </div>
              <div className="cv-item">
                <span className="cv-title">Intern</span><br/>
                <span className="cv-location">PhishCloud, Seattle, WA, 2019 - 2019</span><br/>
                <ul>
                  <li>Contributed to PhishCloud’s Chrome extension</li>     
                  <li>Built a multiple page user portal in React with the ability to dynamically display API data visualizations</li>
                </ul>
              </div>
              <div className="cv-item">
                <span className="cv-title">Sales Associate</span><br/>
                <span className="cv-location">University Bookstore, Seattle, WA, 2017 - Present</span><br/>
                <ul>
                  <li>Hosted weekly in-store events and represented the store at off-site events such as Emerald City Comic Con</li>     
                  <li>Provided textbook purchase, sellback, and rental services to University of Washington students</li>
                </ul>
              </div>
              <div className="cv-item">
                <span className="cv-title">Firmware QA Tester</span><br/>
                <span className="cv-location">Good Measure Design LLC., Seattle, WA, 2017 - 2017</span><br/>
                <ul>
                  <li>Installed firmware and performed range testing on 900MHZ Explorer radio boards</li>     
                </ul>
              </div>
            </Col>
          </Row>
        </div>
        <div className="cv-section">
          <Row>
            <Col>
              <div className="cv-header">
                <h5>EDUCATION</h5>
              </div>
              <div className="cv-item">
                <span className="cv-title">Certificate of Completion</span><br/>                                                                                   
                <span className="cv-location">Epicodus, Seattle, WA, 2019</span><br/>
                <ul>
                  <li>Full-time, 27-week Programming Bootcamp</li>
                  <li>Logged approximately 600 hours of pair-programming and 160 hours of work on independent projects</li>
                </ul>
              </div>
              <div className="cv-item" id="education">
                <span className="cv-title">BA in Cultural Anthropology</span><br/>                            
                <span className="cv-location">University of California, Santa Cruz, Santa Cruz, CA 2008 - 2011</span><br/>
              </div>
            </Col>
          </Row>
        </div>
        </Container>
    </div>
  );
}

export default CV;