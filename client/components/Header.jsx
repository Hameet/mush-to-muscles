import React, { Component } from 'react'
import { Navbar, Nav, NavItem} from 'react-bootstrap';
import {connect} from 'react-redux'
import About from './About'


class Header extends Component {
  render() {
    return (
      <Navbar default collapseOnSelect>
  <Navbar.Header>
    
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
  <Nav pullRight>
      
    <NavItem eventKey={1} href="/">
    <strong>Home</strong>
    </NavItem>
      
    <NavItem eventKey={About} href="https://github.com/Hameet/mush-to-muscles">
    <strong>Code</strong>
    </NavItem>
    <NavItem eventKey={3} href="#/exercises">
    <strong>Added Workouts</strong>
    </NavItem>
  </Nav>
  </Navbar.Collapse>
</Navbar>
    )
  }
}

export default connect () (Header)