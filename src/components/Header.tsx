import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const Header: React.FC = () => (
  <Navbar bg="dark" variant="dark" expand="lg" className="main-header">
    <Navbar.Brand className='navbar-title' as={Link} to="/">
      Game Library Tracker
    </Navbar.Brand>

    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav>
        <Nav.Link className='navbar-home' as={Link} to="/">
          Home
        </Nav.Link>
        <Nav.Link className='navbar-addgame' as={Link} to="/add">
          Add Game
        </Nav.Link>
        <Nav.Link className='navbar-about' as={Link} to="/about">
          About
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
