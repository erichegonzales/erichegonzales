import { Container, Nav, Navbar } from "react-bootstrap";

const Navigation = ({ div2ref, div3ref, div4ref, div5ref }) => {
  return (
    <Navbar bg="light" expand="lg">
      <Container id="nav-container">
        <Navbar.Brand href="/" id="logo-eg">
          EG
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav id="nav-bar" className="justify-content-end">
            <Nav.Item>
              <Nav.Link className="nav-item" href="/">
                About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="nav-item" href="/projects">
                Projects
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="nav-item" href="/contact">
                Contact
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
