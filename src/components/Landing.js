import { Container, Image, Row, Col } from "react-bootstrap";
// import ScrollTrigger from "react-scroll-trigger";
import EG from "../images/EG.JPG";

const Landing = () => {
  return (
    <>
      <div id="div1">
        <Container fluid>
          <Row id="home-col1"></Row>
          <Row>
            <Col></Col>
            <Col xs={5}>
              <div id="intro">
                <h1 id="hello">Hello,</h1>
                <h1 id="eriche">I'm Eriche</h1>
                <h4 id="engineer">A software engineer</h4>
              </div>
            </Col>
            <Col xs={5}>
              <Image id="img-me" roundedCircle src={EG} fluid />
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
      <div id="div1">
        <p>test</p>
      </div>
    </>
  );
};

export default Landing;
