import { Container, Image, Row, Col } from "react-bootstrap";
// import ScrollTrigger from "react-scroll-trigger";
import eg from "../images/eg.jpg";
import arrow from "../images/arrow.png";

const Landing = () => {
  return (
    <div id="wrapper">
      <div className="div1">
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
              <Image id="img-me" roundedCircle src={eg} fluid />
            </Col>
            <Col></Col>
        <Image className="arrow-img bounce" src={arrow} />
          </Row>
        </Container>
      </div>
      <div className="div2">
        <Container>
          <Row>
            <Col></Col>
            <Col>
              <div></div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="div3">
        <Container>
          <Row>
            <Col></Col>
            <Col>
              <div></div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="div4">
        <Container>
          <Row>
            <Col></Col>
            <Col>
              <div></div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="div5">
        <Container>
          <Row>
            <Col></Col>
            <Col>
              <div></div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Landing;
