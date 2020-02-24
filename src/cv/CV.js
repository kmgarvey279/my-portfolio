import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './CV.css';

function CV() {
  return (
    <div className="cv">
        <Container>
          <h2>Kevin Garvey</h2>
          <p>Web Developer</p>
          <Row>
            <Col>
            <h5>SKILLS</h5>
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
          <Row>
            <Col>
              <h5>EXPERENCE</h5>
              <div>
                <span className="cv-title">Debug Tester</span><br/>
                <span className="cv-location">Parker Staffing, Redmond, WA, 2019 - 2020</span>
                <ul>
                  <li>Worked with a 10-12 person team to identify and document software bugs</li>
                </ul>      
              </div>
              <div>
                <span className="cv-title">Intern</span><br/>
                <span className="cv-location">PhishCloud, Seattle, WA, 2019 - 2019</span><br/>
                <ul>
                  <li>Contributed to PhishCloud’s Chrome extension</li>     
                  <li>Built a multiple page user portal in React with the ability to dynamically display API data as interactive tables and Victory charts and graphs</li>
                </ul>
              </div>
              <div>
                <span className="cv-title">Sales Associate</span><br/>
                <span className="cv-location">University Bookstore, Seattle, WA, 2017 - Present</span><br/>
                <ul>
                  <li>Hosted and facilitated weekly author events</li>     
                  <li>Processed online orders</li>
                </ul>
              </div>
              <div>
                <span className="cv-title">Firmware QA Tester</span><br/>
                <span className="cv-location">Good Measure Design LLC., Seattle, WA, 2017 - 2017</span><br/>
                <ul>
                  <li>Installed firmware and performed range testing on 900MHZ Explorer radio boards</li>     
                </ul>
              </div>
              <h5>EDUCATION</h5>
              <div>
                <span className="cv-title">Certificate of Completion</span><br/>                                                                                   
                <span className="cv-location">Epicodus, Seattle, WA, 2019</span><br/>
                <ul>
                  <li>Completed full-time, 27-week C# and React Track</li>
                  <li>Logged approximately 600 hours of pair-programming and work on group projects and 160 hours of work on independent projects in class.</li>
                </ul>
              </div>
              <div>
                <span className="cv-title">BA in Cultural Anthropology</span><br/>                            
                <span className="cv-location">University of California, Santa Cruz, Santa Cruz, CA 2008 - 2011</span><br/>
              </div>
            </Col>
          </Row>
        </Container>
    </div>
  );
}

export default CV;