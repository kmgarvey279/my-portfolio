import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Portfolio.css';
import Preview from '../preview/Preview';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop, faChevronUp, faChevronDown, faChevronRight, faChevronLeft, faFileCode } from '@fortawesome/free-solid-svg-icons';
import cryostat1 from '../assets/cryostat1.png';
import cryostat2 from '../assets/cryostat2.png';
import cryostat3 from '../assets/cryostat3.png';
import cryostat4 from '../assets/cryostat4.png';
import book1 from '../assets/book1.png';
import book2 from '../assets/book2.png';
import book3 from '../assets/book3.png';
import book4 from '../assets/book4.png';
import rpg1 from '../assets/rpg1.png';
import rpg2 from '../assets/rpg2.png';
import rpg3 from '../assets/rpg3.png';
import rpg4 from '../assets/rpg3.png';
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
      image: 0,
      next: 1,
      fade: false
    };
  };

  componentDidMount(){
    setInterval(() =>
      this.cycleImages(), 
      5000
    );
  }

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
      project: num,
      image: 0,
      next: 1
    })
  }

  selectProject(num){
    this.setState({
      project: num,
      image: 0,
      next: 1
    })
  }

  cycleImages(){
    let currentImage = this.state.next;
    let nextImage = this.state.next + 1;
    if(nextImage > 3){
      nextImage = 0;
    }
    this.setState({
      fade: true
    });
  setTimeout(() =>
    this.setState({
      fade: false,
      image: currentImage
    }), 
    3000
  );
  setTimeout(() =>
    this.setState({
      next: nextImage
    }), 
    4000
  );
  }

  render() {
    let projects = {
      0: {
        key: 0,
        name: 'Cryostat',
        images: [
          <img src={cryostat1}/>, <img src={cryostat2}/>, <img src={cryostat3}/>, <img src={cryostat4}/> 
        ],
        text: 'Cryostat is a short browser game inspired by classic titles like The Legend of Zelda and Bomberman.',
        features: ['4+ unique abilities and weapons', 'over a dozen unique environmetal hazards and interactable objects', '100% original pixel art', 'local save functionality with multiple files'],
        gitLink: "https://github.com/kmgarvey279/cryostat-game",
        liveLink: '',
        technologies: [<img className="skill-icon" src={js} width="25" height="25"/>, <img className="skill-icon" src={css} width="25" height="25"/>, <img className="skill-icon" src={react} width="25" height="25"/>, <img className="skill-icon" src={redux} width="25" height="25"/>, <img className="skill-icon" src={node} width="25" height="25"/>]
      },
      1: {
        key: 1,
        name: 'Virtual Bookshelf',
        images: [
          <img src={book1}/>, <img src={book2}/>, <img src={book3}/>, <img src={book4}/>
        ],
        text: 'Allows users customize their personal bookshelf and track their reading.',
        features: ['Build your library using the Google Books API', 'Sort your saved books into multiple categories', 'Track your reading progress and rate books you\'ve completed.'],
        gitLink: '',
        liveLink: '',
        technologies: [<img className="skill-icon" src={js} width="25" height="25"/>, <img className="skill-icon" src={angular} width="25" height="25"/>, <img className="skill-icon" src={html} width="25" height="25"/>, <img className="skill-icon" src={css} width="25" height="25"/>, <img className="skill-icon" src={node} width="25" height="25"/>]
      },
      2: {
        key: 2,
        name: 'Drakania',
        images: [
          <img src={rpg1}/>, <img src={rpg2}/>, <img src={rpg3}/>, <img src={rpg4}/> 
        ],
        text: 'A dungeon exploration game with turn-based RPG combat.',
        features: ['Procedurally generated dungeon layouts', 'Three character classes to choose from, each with unique skills and stats', 'Collect weapons, keys, potions, and other loot.'],
        gitLink: '',
        liveLink: '',
        technologies: [<img className="skill-icon" src={js} width="25" height="25"/>, <img className="skill-icon" src={html} width="25" height="25"/>, <img className="skill-icon" src={css} width="25" height="25"/>]
      },
      3: {
        key: 3,
        name: 'Super Smash Brothers Character Guide',
        images: [
          <img src={ssbu}/>
        ],
        text: 'Placeholding is the best!',
        gitLink: '',
        liveLink: '',
        technologies: ['JavaScript', 'React', 'Redux']
      },
      4: {
        key: 4,
        name: 'Super Smash Brothers Character Guide',
        images: [
          <img src={ssbu}/>
        ],
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
                          <h4 className="project-name"><span id="project-num">0{projects[this.state.project].key}:</span> {projects[this.state.project].name}</h4>
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
                            <ul className={this.state.hover ? 'features-active' : ''}>
                              {Object.keys(projects[this.state.project].features).map( key =>
                                <li className="feature">{projects[this.state.project].features[key]}</li>
                              )}
                            </ul>
                            <div className={this.state.hover === true ? 'hover-tint-active' : 'hover-tint-inactive'}>
                            </div>
                            <div className='project-image'>{projects[this.state.project].images[this.state.image]}</div>
                            <div className='project-image-next' id={this.state.fade ? 'fade-in' : ''}>{projects[this.state.project].images[this.state.next]}</div>
                          </div>
                        </div>
                        </Col>
                        <Col md={1}>
                        <div className="project-previews">
                          <ul className="project-preview-list">
                            <li><FontAwesomeIcon className="arrow" onClick={() => this.changeProject(this.state.project - 1)} icon={faChevronUp} size="3x" /></li>
                            {Object.keys(projects).map( key =>
                              <li className="project-thumbnail" onClick={() => this.selectProject(key)}><Preview image={projects[key].images[0]} number={key} current={this.state.project} /></li>
                            )}
                             <li><FontAwesomeIcon className="arrow" onClick={() => this.changeProject(this.state.project + 1)} icon={faChevronDown} size="3x" /></li>
                          </ul>
                        </div>
                        </Col>
                      </Row>
                      <Row>
                        <div className="project-links">
                          <Col>
                            <a href={projects[this.state.project].gitLink} target="_blank" rel="noopener noreferrer">
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