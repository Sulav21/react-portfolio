import React from 'react'
import { Nav,Navbar, Container } from 'react-bootstrap'
import logo from '../../assets/logo.png'
import "./header.css"

    export const Header = () => {
      return (
        <div>
            <Navbar id="navbar" bg="dark" expand="md" collapseOnSelect>
      <Container >
        <Navbar.Brand href="#home">
            <img src={logo} alt="" width="70px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-link ms-auto fw-bolder text-info">
            <Nav.Link href="#skills" >Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#about-me">About Me</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
        </div>
      )
    }
  
