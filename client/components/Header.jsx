// import React from 'react'
// import {Link} from 'react-router-dom'

// function Header () {
//   return (
//     <div className='header'>
//       <h1 className='brand-title'>Gym Diary</h1>
//       <nav className='nav'>
//         <ul className='nav-list'>
//           <li className='nav-item'>
//             <Link to='/' className='pure-button'>Home</Link>
//           </li>
//           <li className='nav-item'>
//             <Link to='/exercises' className='pure-button'>Added Workouts</Link>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   )
// }

// export default Header


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
      
    <NavItem eventKey={About} href="https://github.com/Hameet/Gym-app">
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