import { faPizzaSlice } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Nav,Navbar,Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavigationMenu = () => {
    return(
        <Navbar bg="light" expand="lg">
j 
        <Container>
        <FontAwesomeIcon icon={faPizzaSlice}
        rotation={270}
        className="me-2"/>
        <Navbar.Brand to="/" as={NavLink}>Platter</Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
        
        <Nav className="me-auto">
        
        <Nav.Link to="/restaurants" as={NavLink}>Restaurants</Nav.Link>
        
        <Nav.Link to="/about" as={NavLink}>About</Nav.Link>
        
         
        
        </Nav>
        
        </Navbar.Collapse>
        
        </Container>
        
        </Navbar>
    )
}
export default NavigationMenu;