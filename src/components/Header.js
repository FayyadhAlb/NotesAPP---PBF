import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import { Nav,Navbar, Container} from 'react-bootstrap'

const Header = () => {
  return (
      <Container>
        <Navbar bg="dark" expand="lg">
            <Navbar.Brand href="#home">NOTES</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="nr-auto">
                  <LinkContainer to="/">
                    <Nav.Link>Home</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/note">
                    <Nav.Link>Notes</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/create">
                    <Nav.Link>Create</Nav.Link>
                  </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
      </Container>
    
  )
}

export default Header