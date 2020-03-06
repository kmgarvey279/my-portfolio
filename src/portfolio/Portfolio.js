import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Portfolio.css';
import Preview from '../preview/Preview';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop, faChevronLeft, faChevronRight, faFileCode } from '@fortawesome/free-solid-svg-icons';
import cryostat from '../assets/Capture.PNG';
import bookshelf from '../assets/book-list.gif';
import ssbu from '../assets/ssbu.gif';

export default class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      project: 0
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

  render() {
    let projects = {
      0: {
        key: 0,
        name: 'Cryostat',
        image: <img src={cryostat}/>,
        text: 'Placeholding is the best!',
        gitLink: '',
        liveLink: ''
      },
      1: {
        key: 1,
        name: 'Virtual Bookshelf',
        image: <img src={bookshelf}/>,
        text: 'Placeholding is the best!',
        gitLink: '',
        liveLink: ''
      },
      2: {
        key: 2,
        name: 'Drakania',
        image: <img src={cryostat}/>,
        text: 'Placeholding is the best!',
        gitLink: '',
        liveLink: ''
      },
      3: {
        key: 3,
        name: 'Super Smash Brothers Character Guide',
        image: <img src={ssbu}/>,
        text: 'Placeholding is the best!',
        gitLink: '',
        liveLink: ''
      },
      4: {
        key: 4,
        name: 'Super Smash Brothers Character Guide',
        image: <img src={ssbu}/>,
        text: 'Placeholding is the best!',
        gitLink: '',
        liveLink: ''
      },
    }
    return (
      <div className="portfolio">
          <h2>- Portfolio -</h2>
          <Container>
                <Row>
                  <Col>
                    <div className="arrow-left">
                      <FontAwesomeIcon onClick={() => this.changeProject(this.state.project - 1)} icon={faChevronLeft} size="3x" />
                    </div>
                  </Col>
                  <Col>
                    <div className="project-box">
                      <Row>
                      <div className="project-info">
                        <h4 className="project-num">{'00' + (parseInt(this.state.project) + 1)}</h4>
                        <h4>{projects[this.state.project].name}</h4>
                      </div>
                      </Row>
                      <Row>
                        <div className="project-image" onMouseEnter={() => this.toggleHover(true)} onMouseLeave={() => this.toggleHover(false)}>
                          <p className={this.state.hover ? 'hover-text-active' : 'hover-text-inactive'}>{projects[this.state.project].text}</p>
                          <div className={this.state.hover === true ? 'hover-tint-active' : 'hover-tint-inactive'}>
                          </div>
                          {projects[this.state.project].image}
                        </div>
                      </Row>
                      <Row>
                        <div className="project-links">
                            <div id="git-link">
                              <a href={projects[this.state.project].gitLink}><FontAwesomeIcon icon={faFileCode} size="1x" /> Repo</a>
                            </div>
                            <div id="live-link">
                              <a href={projects[this.state.project].liveLink}><FontAwesomeIcon icon={faLaptop} size="1x" /> Live</a>
                            </div>
                        </div>
                      </Row>
                    </div>
                    <Row>
                    <div className="project-previews">
                      {Object.keys(projects).map( key =>
                        <div className="project-thumbnail"><Preview image={projects[key].image} number={key} current={this.state.project} /></div>
                      )};
                    </div>
                </Row>
                  </Col>
                  <Col>
                    <FontAwesomeIcon onClick={() => this.changeProject(this.state.project + 1)} className="arrow-right" icon={faChevronRight} size="3x" />
                  </Col>
                </Row>
          </Container>
      </div>
    );
  };
}