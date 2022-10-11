import { Container, Nav, Navbar } from "react-bootstrap";

const Navigation = ({ div2ref, div3ref, div4ref, div5ref }) => {
  return (
    <Navbar id="nav-bar" bg="light" expand="lg">
      <Container id="nav-container">
        <Navbar.Brand href="/" id="logo-circle">EG</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="nav-item" href="/">
              About
            </Nav.Link>
            <Nav.Link className="nav-item" href="/projects">
              Projects
            </Nav.Link>
            <Nav.Link className="nav-item" href="/#contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation