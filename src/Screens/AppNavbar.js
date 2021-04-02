import React from 'react';
import logo from '../img/logo.png'; 
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

class AppNavbar extends React.Component {
  constructor(props){
    super(props)

    this.state =  {
      prenom: 'Pierrito',
      nom: 'Martinez',
      age:19,
      fleur: { couleur:'rose'}
    }

  }
  handleClick(){
    this.setState({
      prenom: "Pierre"
    });
  }

  render(){
    return (
      <Navbar className="navbarClass fixed-top" expand="lg">
        <Navbar.Brand><img src={logo} className="logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link className="customNavlink" href="">HORAIRES</Nav.Link>
          
        </Nav>
        <Nav.Link className="customNavlink" href="#Mon Compte">Mon Compte</Nav.Link>   
        <a href="#" className="btn btn-primary" onClick={() => this.troll()}>Administration</a>   
        </Navbar.Collapse>  
      </Navbar>

    );
  }
}

export default AppNavbar;
