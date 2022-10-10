import { Container, Nav, Navbar } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar id="nav-bar" bg="light" expand="lg">
      <Container id="nav-container">
        <Navbar.Brand href="/">
          EG
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="nav-item" href="/">
              About
            </Nav.Link>
            <Nav.Link className="nav-item" href="/projects">
              Projects
            </Nav.Link>
            <Nav.Link className="nav-item" href="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation