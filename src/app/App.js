import React, { Component } from 'react';
import './App.css';
import NavBar  from '../navbar/NavBar';
import About  from '../about/About';
import CV from '../cv/CV';
import Portfolio  from '../portfolio/Portfolio';
import Contact  from '../contact/Contact';
import Sidebar from '../sidebar/Sidebar';
import Footer from '../footer/Footer';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      active: 'About'
    };
    this.changeActiveView = this.changeActiveView.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  changeActiveView(newView){
    this.setState({active: newView})
  }

  toggleModal(){
    if(this.state.modal){
      this.setState({modal: false})
    } else {
      this.setState({modal: true})
    }
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
    let cvModal = null;
    if(this.state.modal === true){
      cvModal = <CV toggleModal={this.toggleModal}/>
    };
    return(
      <div className="App">
        <div className="filter">
        </div>
        {cvModal}
        <NavBar changeView={this.changeActiveView} active={this.state.active} toggleModal={this.toggleModal} modal={this.state.modal}/>
        {content}
        <Footer/>
      </div>
    );
  };
}