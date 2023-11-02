import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import navLogo from '../images/logo-no-background.svg'
// import { useState, useEffect } from 'react';


const NavigationBar = ({user, setUser, setToken}) => {
  if (!user) {
    return null;
  }
  return (
    <Navbar expand="lg" className="navbar navbar-expand-lg" bg='dark' variant='dark' sticky='top'>
      <Container fluid>
        <Navbar.Brand href="/" className='flex-grow-1 justify-content-start'>
          <img src={navLogo} className='d-inline-block align top d-flex align-items-start'  alt="myFlix logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/" className='nav-text font-style'>Home</Nav.Link>
            <Nav.Link href="/myList/favorites" className='nav-text font-style'>My List</Nav.Link>
            {/* <Nav.Link href="/users" className='nav-text font-style'>Profile</Nav.Link> */}

            <NavDropdown title="Profile" id="navbarScrollingDropdown" menuVariant='dark'>
            <NavDropdown.Item href="/profile" className='nav-text font-style' >My Profile</NavDropdown.Item>
              {/* <NavDropdown.Item href="/manageProfile/" className='nav-text font-style'>Manage Profiles</NavDropdown.Item>
              <NavDropdown.Item href="/account" className='nav-text font-style'>Account</NavDropdown.Item> */}
              <NavDropdown.Item href="" className='nav-text font-style'
              
              onClick={() => {
                setUser(null);
                setToken(null);
                localStorage.clear();
              }}
              >Logout</NavDropdown.Item>
           </NavDropdown>
              {/* <Nav.Link href="#action2" id=''>Browse by Genre</Nav.Link> */}
              <NavDropdown title="Browse by Genre" id="nav-dropdown-dark-example drop-styles" menuVariant='dark'>
              <NavDropdown.Item href="/movies/Thriller">Thriller</NavDropdown.Item>
              <NavDropdown.Item href="/movies/Action">Action</NavDropdown.Item>
              <NavDropdown.Item href="/movies/Romance">Romance</NavDropdown.Item>
              <NavDropdown.Item href="/movies/Science-Fiction">Science-Fiction</NavDropdown.Item>
              <NavDropdown.Item href="/movies/Drama">Drama</NavDropdown.Item>
              <NavDropdown.Item href="/movies/Horror">Horror</NavDropdown.Item>
              <NavDropdown.Item href="/movies/History">History</NavDropdown.Item>
              <NavDropdown.Item href="/movies/Fantasy">Fantasy</NavDropdown.Item>
              <NavDropdown.Item href="/movies/Mystery">Mystery</NavDropdown.Item>
              <NavDropdown.Item href="/movies/Adventure">Adventure</NavDropdown.Item>
              <NavDropdown.Item href="/movies/Crime">Crime</NavDropdown.Item>
              <NavDropdown.Item href="/movies/Comedy">Comedy</NavDropdown.Item>
              
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

export {NavigationBar}