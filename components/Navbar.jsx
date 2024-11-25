import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

const NavbarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#">
          <img
            src="data:image/png;base64,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"
            alt="DNK Logo"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="me-auto">
            <Nav.Link href="#" className="nav-link-hover">Everything</Nav.Link>
            <Nav.Link href="#" className="nav-link-hover">Women</Nav.Link>
            <Nav.Link href="#" className="nav-link-hover">Men</Nav.Link>
            <Nav.Link href="#" className="nav-link-hover">Accessories</Nav.Link>
            <Nav.Link href="#" className="nav-link-hover">About</Nav.Link>
            <Nav.Link href="#" className="nav-link-hover">Contact Us</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#" className="nav-link-hover">$0.00</Nav.Link>
            <Nav.Link href="#">
              <i className="bi bi-cart"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
