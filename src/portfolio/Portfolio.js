import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Portfolio.css';
import Preview from '../preview/Preview';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop, faChevronUp, faChevronDown, faChevronRight, faChevronLeft, faFileCode } from '@fortawesome/free-solid-svg-icons';
import cryostat from '../assets/Capture.PNG';
import bookshelf from '../assets/book-list.gif';
import ssbu from '../assets/ssbu.gif';
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

export default class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      project: 0,
    };
  };

  toggleHover(bool){
    this.setState({
      hover: bool,
    });
  }

  changeProject(num){
    if(num > 4){
      num = 0;
    } else if(num < 0){
      num = 4;
    }
    this.setState({
      project: num
    })
  }

  selectProject(num){
    console.log(num)
    this.setState({
      project: num
    })
  }

  render() {
    let projects = {
      0: {
        key: 0,
        name: 'Cryostat',
        image: <img src={cryostat}/>,
        text: 'Placeholding is the best!',
        gitLink: '',
        liveLink: '',
        technologies: [<img className="skill-icon" src={js} width="25" height="25"/>, <img className="skill-icon" src={css} width="25" height="25"/>, <img className="skill-icon" src={react} width="25" height="25"/>, <img className="skill-icon" src={redux} width="25" height="25"/>]
      },
      1: {
        key: 1,
        name: 'Virtual Bookshelf',
        image: <img src={bookshelf}/>,
        text: 'Placeholding is the best!',
        gitLink: '',
        liveLink: '',
        technologies: ['JavaScript', 'React', 'Redux']
      },
      2: {
        key: 2,
        name: 'Drakania',
        image: <img src={cryostat}/>,
        text: 'Placeholding is the best!',
        gitLink: '',
        liveLink: '',
        technologies: ['JavaScript', 'React', 'Redux']
      },
      3: {
        key: 3,
        name: 'Super Smash Brothers Character Guide',
        image: <img src={ssbu}/>,
        text: 'Placeholding is the best!',
        gitLink: '',
        liveLink: '',
        technologies: ['JavaScript', 'React', 'Redux']
      },
      4: {
        key: 4,
        name: 'Super Smash Brothers Character Guide',
        image: <img src={ssbu}/>,
        text: 'Placeholding is the best!',
        gitLink: '',
        liveLink: '',
        technologies: ['JavaScript', 'React', 'Redux']
      },
    }
    return (
      <div className="portfolio">
          <h2>- Portfolio -</h2>
          <Container>
                <Row>
                  <Col>
                    <div className="project-box">
                      <Row>
                        <Col>
                        <div className="project-info">
                          <h4 className="project-name">{projects[this.state.project].name}</h4>
                          <ul className="project-techs">
                            {
                              projects[this.state.project].technologies.map((tech) =>
                                <li className="project-tech">{tech}</li>
                              )
                            }
                          </ul>
                        </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={11}>
                        <div className="project-image-wrap">
                          <div className="project-image-wrap-inner" onMouseEnter={() => this.toggleHover(true)} onMouseLeave={() => this.toggleHover(false)}>
                            <p className={this.state.hover ? 'hover-text-active' : 'hover-text-inactive'}>{projects[this.state.project].text}</p>
                            <div className={this.state.hover === true ? 'hover-tint-active' : 'hover-tint-inactive'}>
                            </div>
                            <div className='project-image'>{projects[this.state.project].image}</div>
                          </div>
                        </div>
                        </Col>
                        <Col md={1}>
                        <div className="project-previews">
                          <ul className="project-preview-list">
                            <li><FontAwesomeIcon className="arrow" onClick={() => this.changeProject(this.state.project - 1)} icon={faChevronUp} size="3x" /></li>
                            {Object.keys(projects).map( key =>
                              <li className="project-thumbnail" onClick={() => this.selectProject(key)}><Preview image={projects[key].image} number={key} current={this.state.project} /></li>
                            )}
                             <li><FontAwesomeIcon className="arrow" onClick={() => this.changeProject(this.state.project + 1)} icon={faChevronDown} size="3x" /></li>
                          </ul>
                        </div>
                        </Col>
                      </Row>
                      <Row>
                        <div className="project-links">
                          <Col>
                            <a href={projects[this.state.project].gitLink}>
                              <div id="git-link">
                                <FontAwesomeIcon icon={faFileCode} size="1x" /> Repo
                              </div>
                            </a>
                          </Col>
                          <Col>
                          <a href={projects[this.state.project].liveLink}> 
                            <div id="live-link">
                              <FontAwesomeIcon icon={faLaptop} size="1x" /> Live
                            </div>
                          </a>
                          </Col>
                        </div>
                      </Row>
                    </div>
                  </Col>
                </Row>
          </Container>
      </div>
    );
  };
}