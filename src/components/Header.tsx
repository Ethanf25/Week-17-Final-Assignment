import { Navbar, Nav } from 'react-bootstrap'; // Import Navbar and Nav components from react-bootstrap
import { Link } from 'react-router-dom'; // Import Link component to handle navigation
import "../App.css"; // Import your CSS file for styling

// Define the Header component
const Header: React.FC = () => ( // This is a functional component that returns the header and navigation bar
  <Navbar bg="dark" variant="dark" expand="lg" className="main-header"> 
    {/* Navbar.Brand is usually the app name or logo, linking to home */}
    <Navbar.Brand className='navbar-title' as={Link} to="/">
      Game Library Tracker {/* Visible app name inside the brand */}
    </Navbar.Brand>

    <Navbar.Toggle aria-controls="basic-navbar-nav" /> {/* Button to toggle navbar on small screens */}

    <Navbar.Collapse id="basic-navbar-nav"> {/* Container for collapsible navbar content */}
      <Nav>
        {/* Navigation links with visible text */}
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
); // This is the return statement that renders the header with navigation links like Home, Add Game, and About

export default Header; // Export the Header component so it can be used in other files
