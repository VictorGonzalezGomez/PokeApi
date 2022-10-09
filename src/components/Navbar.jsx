import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from "react-router-dom";
import pikachu from "../assets/img/pikachu.png"
const pikachuIcon = pikachu;
function PokeNav() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand ><img src={pikachuIcon} alt="cara de pikachu" className="navIcon"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav className="flexContainer">
            <NavLink className={({isActive}) =>
              isActive ? "active" : "disable"
            } end to='/'>
              home
            </NavLink>
            <NavLink className={({isActive}) =>
              isActive ? "active" : "disable"
            } to='/pokemon'>
              Pokemones
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default PokeNav;