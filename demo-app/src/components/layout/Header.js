import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaBell,FaCloudUploadAlt,FaEnvelope } from 'react-icons/fa';
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tech">
    <Container>
      <Navbar.Brand href="#home" className='brand-logo'>EY WAM</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Link to="/" className='link-class'>Home</Link>
          <NavDropdown title="Accounts" id="basic-nav-dropdown">
          <Link to="accounts" className='link-class p-3'>Holdings</Link>
            <NavDropdown.Item href="#">
              Activity
            </NavDropdown.Item>
            <NavDropdown.Item href="#">
              Liablities
            </NavDropdown.Item>
            <NavDropdown.Item href="#">Balances</NavDropdown.Item>
            <NavDropdown.Item href="#">Documents</NavDropdown.Item>
          </NavDropdown>
          <Link className='link-class' to="planning">Planning</Link>
          <Nav.Link href="#finwell">FinWell</Nav.Link>
          <Nav.Link href="#trade">Trade</Nav.Link>
          <Nav.Link href="#lending">Lending</Nav.Link>
        </Nav>
        <Nav>
            <Nav.Link href="#"><FaBell className='text-2l'/> <span className="badge text-bg-warning alerts-icon">4</span></Nav.Link>
            <Nav.Link href="#"><FaCloudUploadAlt className='text-2l'/></Nav.Link>
            <Nav.Link href="#"><FaEnvelope className='text-2l'/></Nav.Link>
          </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header