import {
  Container,
  Image,
  Row,
  Col,
  Card,
  Button,
  CardGroup,
  Stack,
} from "react-bootstrap";
// import eg from "../images/EG.JPG";
// import arrow from "../images/arrow.png";
// import project from "../images/project.jpg";
// import contact from "../images/contact.jpg";
import { useRef } from "react";
import Transitions from "./Transitions";
import Footer from "./Footer";

const Home = () => {
  const eg = "https://drive.google.com/uc?id=1-FWmwKQU4re7Gp7AevWBUy7jj5i-fBD6";

  const project =
    "https://drive.google.com/uc?id=1hgR6j-m_fLc-BJICISSLXgZzE74CYWM4";

  const contact =
    "https://drive.google.com/uc?id=1ZrR64TPl3fHYPBH1V6ql13BjFEYDcHnY";

  const div2ref = useRef();
  const div3ref = useRef();
  const div4ref = useRef();
  const div5ref = useRef();
  const div6ref = useRef();

  const handleDiv1Click = () => {
    div2ref.current.scrollIntoView({ behavior: "smooth", duration: 2000 });
  };

  const handleDiv2Click = () => {
    div3ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleDiv3Click = () => {
    div4ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleDiv4Click = () => {
    div5ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleDiv5Click = () => {
    div6ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Transitions>
      <div id="wrapper">
        <div className="div1">
          <Container fluid>
            <Row>
              <Col></Col>
            </Row>
            <Row>
              <Col></Col>
              <Col lg={5}>
                <div id="intro">
                  <h1 id="hello">Hello,</h1>
                  <h1 id="eriche">I'm Eriche</h1>
                  <h4 id="engineer">A software engineer</h4>
                  <br />
                </div>
              </Col>
              <Col lg={5}>
                <div id="eg-img-div">
                  <Image id="eg-img" roundedCircle src={eg} fluid />
                </div>
              </Col>
              <Col></Col>

              {/* <p id="read-more">Read more</p>

              <Image
                className="arrow img1 bounce"
                src={arrow}
                onClick={handleDiv1Click}
              /> */}
            </Row>
          </Container>
        </div>
        <div className="div2" ref={div2ref}>
          <Container className="home-card-div" fluid>
            <CardGroup>
              <Card className="home-card">
                <Card.Body>
                  <Card.Title>Who I Am</Card.Title>
                  <Card.Text>
                    I am a software engineer experienced in creating full-stack
                    applications. My skills include, but are not limited to,
                    Ruby, Rails, JavaScript, React, Python, Django, Java, HTML,
                    CSS, Git, PostgreSQL, and MySQL. I graduated from Flatiron
                    School bootcamp in October 2022 where I learned JavaScript
                    with React and Ruby on Rails. I'm pursuing full-stack or
                    back-end development roles to begin my career in the tech
                    industry.
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardGroup>
          </Container>
          {/* <Container fluid>
            <Row>
              <Col>
                <div className="left-div who">
                  <h1>Who I Am</h1>
                  <p>
                    I am a software engineer experienced in creating full-stack
                    applications. My skills include, but are not limited to,
                    Ruby, Rails, JavaScript, React, Python, Django, Java, HTML,
                    CSS, Git, PostgreSQL, and MySQL. I graduated from Flatiron
                    School bootcamp in October 2022 where I learned JavaScript
                    with React and Ruby on Rails. I'm pursuing full-stack or
                    back-end development roles to begin my career in the tech
                    industry.
                  </p>
                </div>
              </Col>
              <Col></Col>
              <Col></Col>
              <Image
                className="arrow img2 bounce"
                src={arrow}
                onClick={handleDiv2Click}
              />
            </Row>
          </Container> */}
        </div>
        <div className="div3" ref={div3ref}>
          <Container className="home-card-div" fluid>
            <CardGroup>
              <Card className="home-card">
                <Card.Body>
                  <Card.Title>What I Bring</Card.Title>
                  <Card.Text>
                    I bring my passion to learn, drive to grow, flexibility to
                    change, and ability to solve problems from a unique
                    perspective. I bring my qualities as an open-minded
                    individual, an explorer of new knowledge and skills, and a
                    person with a strong and resilient mindset. I bring my
                    experiences as a team leader and collaborator who asks for
                    help when needed and helps others. That's what I contribute,
                    along with a bright smile, a bubbly personality, and a
                    pleasure to work with.
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardGroup>
          </Container>
          {/* <Container>
            <Row>
              <Col></Col>
              <Col></Col>
              <Col>
                <div className="right-div bring">
                  <h1>What I Bring </h1>
                  <p>
                    I bring my passion to learn, drive to grow, flexibility to
                    change, and ability to solve problems from a unique
                    perspective. I bring my qualities as an open-minded
                    individual, an explorer of new knowledge and skills, and a
                    person with a strong and resilient mindset. I bring my
                    experiences as a team leader and collaborator who asks for
                    help when needed and helps others. That's what I contribute,
                    along with a bright smile, a bubbly personality, and a
                    pleasure to work with.
                  </p>
                </div>
              </Col>
              <Image
                className="arrow img3 bounce"
                src={arrow}
                onClick={handleDiv3Click}
              />
            </Row>
          </Container> */}
        </div>
        <div className="div4" ref={div4ref}>
          <Container className="home-card-div" fluid>
            <CardGroup>
              <Card className="home-card">
                <Card.Body>
                  <Card.Title>Values {"& "} Interests</Card.Title>
                  <Card.Text>
                    I aim to have positive impacts and improve the lives of
                    others. I enjoy creating and building things. I care about
                    diversity, inclusivity, equity, and bringing awareness. I
                    look for growth mindsets and genuine connections. I value a
                    team with initiative, and a leader that effectively guides
                    and communicates with their team. I'm interested in being
                    part of a committed group with hard-working people that
                    values personal well-being, responsibility, and
                    accountability.
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardGroup>
          </Container>
          {/* <Container>
            <Row>
              <Col>
                <div className="left-div values">
                  <h1>Values {"& "} Interests</h1>
                  <p>
                    I aim to have positive impacts and improve the lives of
                    others. I enjoy creating and building things. I care about
                    diversity, inclusivity, equity, and bringing awareness. I
                    look for growth mindsets and genuine connections. I value a
                    team with initiative, and a leader that effectively guides
                    and communicates with their team. I'm interested in being
                    part of a committed group with hard-working people that
                    values personal well-being, responsibility, and
                    accountability.
                  </p>
                </div>
              </Col>
              <Col></Col>
              <Col></Col>
              <Image
                className="arrow img4 bounce"
                src={arrow}
                onClick={handleDiv4Click}
              />
            </Row>
            <p className="img-cred">Photo by Karl Rabe on Flickr</p>
          </Container> */}
        </div>
        <div className="div5" ref={div5ref}>
          <Container className="home-card-div" fluid>
            <CardGroup>
              <Card className="home-card">
                <Card.Body>
                  <Card.Title>My Background</Card.Title>
                  <Card.Text>
                    I graduated from Vassar College in May 2022 with a
                    Bachelor's degree, double-majoring in Physics and Astronomy.
                    I studied topics such as Astrophysics, Quantum Mechanics,
                    Thermodynamics, Solid State Physics, and more. I learned
                    Java OOP in a Data Structures {"& "} Algorithms course, and
                    I completed my senior thesis using Python. I have taken
                    Calculus I/II, Multivariable Calculus, Linear Algebra,
                    Applied Math, and Statistics.
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardGroup>
          </Container>
          {/* <Container>
            <Row>
              <Col></Col>
              <Col></Col>
              <Col>
                <div className="right-div background">
                  <h1>My Background</h1>
                  <p>
                    I graduated from Vassar College in May 2022 with a
                    Bachelor's degree, double-majoring in Physics and Astronomy.
                    I studied topics such as Astrophysics, Quantum Mechanics,
                    Thermodynamics, Solid State Physics, and more. I learned
                    Java OOP in a Data Structures {"& "} Algorithms course, and
                    I completed my senior thesis using Python. I have taken
                    Calculus I/II, Multivariable Calculus, Linear Algebra,
                    Applied Math, and Statistics.
                  </p>
                </div>
              </Col>
              <Image
                className="arrow img5 bounce"
                src={arrow}
                onClick={handleDiv5Click}
              />
            </Row>
          </Container> */}
        </div>
        <div className="div6" ref={div6ref}>
          <h1 id="check-out">Check out my other pages</h1>
          <div className="div6-content">
            <Container>
              <CardGroup>
                <Row md={2} lg={2} xl={2}>
                  <Card className="div6-card">
                    <Card.Body>
                      <Card.Img variant="top" src={project} />
                      <hr />
                      <Card.Text>Browse the projects I've worked on</Card.Text>
                      <Card.Link href="/projects">
                        <Button variant="primary">Visit page</Button>
                      </Card.Link>
                    </Card.Body>
                  </Card>

                  <Card className="div6-card">
                    <Card.Body>
                      <Card.Img variant="top" src={contact} />
                      <hr />
                      <Card.Text>Find me online or send me a message</Card.Text>
                      <Card.Link href="/contact">
                        <Button variant="primary">Visit page</Button>
                      </Card.Link>
                    </Card.Body>
                  </Card>
                </Row>
              </CardGroup>
            </Container>
          </div>
        </div>
        <Footer />
      </div>
    </Transitions>
  );
};

export default Home;
