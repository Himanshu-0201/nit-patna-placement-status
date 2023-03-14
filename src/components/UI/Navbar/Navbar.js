import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import classes from "./Navbar.module.css";

function MyNavbar() {
  return (

    <header className={classes.header}>

    <Navbar className={classes.nav}collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container className={classes.container} >
        <Navbar.Brand>Nitp Placement</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className={classes.pages}>
            <div className={classes['full-time']}>
              <NavLink to="" className={(isActive)=> isActive ? classes.active : undefined} >Full Time</NavLink>
            </div>
            <div >
              <NavLink to="internship" className={(isActive)=> isActive ? classes.active : undefined} >Internship</NavLink>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </header>
  );
}

export default MyNavbar;