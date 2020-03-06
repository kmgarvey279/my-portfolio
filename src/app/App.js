import React, { Component } from 'react';
import './App.css';
import NavBar  from '../navbar/NavBar';
import About  from '../about/About';
import CV  from '../cv/CV';
import Portfolio  from '../portfolio/Portfolio';
import Contact  from '../contact/Contact';
import Footer from '../footer/Footer';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'About'
    };
    this.changeActiveView = this.changeActiveView.bind(this);
  }

  changeActiveView(newView){
    this.setState({active: newView})
  }

  render() {
    let content;
    if(this.state.active === 'About'){
      content = <About />;
    } else if(this.state.active === 'CV'){ 
      content = <CV />;
    } else if(this.state.active === 'Portfolio'){
      content = <Portfolio />;
    } else if(this.state.active === 'Contact'){
      content = <Contact />;
    };

    return(
      <div className="App">
        <div className="filter">
        </div>
        <NavBar changeView={this.changeActiveView} active={this.state.active}/>
        {content}
        <Footer/>
      </div>
    );
  };
}