// import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
// import Form from 'react-bootstrap/Form';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
// import navLogo from "../images/logo-no-background.svg";
// import { Link } from "react-router-dom";
// import { useState, useEffect } from 'react';


const NavigationBar = ({ user, setUser, setToken }) => {
  if (!user) {
    return null;
  }
  return (
    <Navbar 
    expand="lg" 
    className="navbar navbar-expand-lg" 
    bg='black' 
    variant='dark' 
    sticky='top'>
      <Container fluid>
        <Navbar.Brand 
        href="/" 
        className="flex-grow-1 ">
          <h1
          className="d-inline-block align top d-flex align-items-start" 
          style={{ fontWeight: "100px", 
          fontSize: "40px", color: "#ff0000" }}
          >myFlix</h1> 
          {/* <img 
          src={navLogo} 
            
          alt="myFlix logo" /> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/" className='nav-text font-style'>Home</Nav.Link>
            <Nav.Link href="/myList/favorites" className='nav-text font-style'>My List</Nav.Link>
            {/* <Nav.Link href="/users" className='nav-text font-style'>Profile</Nav.Link> */}

            <NavDropdown title="Profile" id="navbarScrollingDropdown" menuVariant='dark'>
            <NavDropdown.Item href="/profile" className='nav-text font-style' >My Profile</NavDropdown.Item>
              {/* <NavDropdown.Item href="/manageProfile/" className='nav-text font-style'>Manage Profiles</NavDropdown.Item>
              <NavDropdown.Item href="/account" className='nav-text font-style'>Account</NavDropdown.Item> */}
              <NavDropdown.Item 
              href="" 
              className='nav-text font-style'
              onClick={() => {
                setUser(null);
                setToken(null);
                localStorage.clear();
              }}
              >Logout</NavDropdown.Item>
           </NavDropdown>
              {/* <Nav.Link href="#action2" id=''>Browse by Genre</Nav.Link> */}
              <NavDropdown title="Browse by Genre" id="nav-dropdown-light-example drop-styles" menuVariant='dark'>
              <NavDropdown.Item href="/movies/genre/Thriller">Thriller</NavDropdown.Item>
              <NavDropdown.Item href="/movies/genre/Action">Action</NavDropdown.Item>
              <NavDropdown.Item href="/movies/genre/Romance">Romance</NavDropdown.Item>
              <NavDropdown.Item href="/movies/genre/Science-Fiction">Science-Fiction</NavDropdown.Item>
              <NavDropdown.Item href="/movies/genre/Drama">Drama</NavDropdown.Item>
              <NavDropdown.Item href="/movies/genre/Horror">Horror</NavDropdown.Item>
              <NavDropdown.Item href="/movies/genre/History">History</NavDropdown.Item>
              <NavDropdown.Item href="/movies/genre/Fantasy">Fantasy</NavDropdown.Item>
              <NavDropdown.Item href="/movies/genre/Mystery">Mystery</NavDropdown.Item>
              <NavDropdown.Item href="/movies/genre/Adventure">Adventure</NavDropdown.Item>
              <NavDropdown.Item href="/movies/genre/Crime">Crime</NavDropdown.Item>
              <NavDropdown.Item href="/movies/genre/Comedy">Comedy</NavDropdown.Item>
              
            </NavDropdown>
          </Nav>

          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              
              className="form-control form-control-sm ml-3 w-75"
              aria-label="Search"
              
            /> */}
            {/* <ArrowRight color="royalblue" size={96} /> */}
            {/* <Button variant="outline-success">Search</Button>
          </Form> */}

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export { NavigationBar };