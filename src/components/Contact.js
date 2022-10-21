import { useState } from "react";
import { Container, Form, Row, Col, Button, Modal } from "react-bootstrap";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import Transitions from "./Transitions";
import Footer from "./Footer";
import emailjs from "@emailjs/browser";
import { init } from "@emailjs/browser";
init("REACT_APP_EMAILJS_SERVICE_ID");
init("REACT_APP_EMAILJS_TEMPLATE_ID");
init("REACT_APP_EMAILJS_USER_ID");

const Contact = () => {
  const dot = "·";
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleCloseSuccess = () => setShowSuccess(false);
  const handleShowSuccess = () => setShowSuccess(true);
  const handleCloseError = () => setShowError(false);
  const handleShowError = () => setShowError(true);

  const handleRedirect = () => {
    window.open("https://github.com/erichegonzales?tab=repositories");
  };

  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          setFormData({
            email: "",
            firstName: "",
            lastName: "",
            subject: "",
            message: "",
          });
          console.log(result.text);
          handleShowSuccess();
        },
        (error) => {
          console.log(error.text);
          handleShowError();
        }
      );
  };

  return (
    <>
      <Transitions>
        <Container className="p-4">
          <br />
          <h1 id="contact-header">Contact Me</h1>
          <hr />
          <Form onSubmit={sendEmail}>
            <div className="contact-div">
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="firstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="lastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Col>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="subject">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="message">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      type="text"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
            </div>
            <br />
            <Button id="submit-btn" variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          <br />
          <hr />
          <br />
          <br />

          <Row>
            <Col>
              <a
                href="https://www.linkedin.com/in/erichegonzales/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#0072b1" }}
              >
                <AiFillLinkedin className="contact-icon-size" />
              </a>
            </Col>
            <Col>
              <a
                href="https://github.com/erichegonzales"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#171515" }}
              >
                <AiFillGithub className="contact-icon-size" />
              </a>
            </Col>
            <Col>
              <a
                href="https://mail.google.com/mail/u/0/?fs=1&to=erichelouise@gmail.com&tf=cm"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#DB4437" }}
              >
                <SiGmail className="contact-icon-size" />
              </a>
            </Col>
          </Row>
          <Row>
            <Col>
              <br />
            </Col>
          </Row>
          <Row>
            <Col>
              <p>Check out my LinkedIn or connect with me</p>
            </Col>
            <Col>
              <p>Browse my source code and GitHub repositories</p>
            </Col>
            <Col>
              <p>Send me a direct email through Gmail</p>
            </Col>
          </Row>
        </Container>
        <Footer />
      </Transitions>

      <Modal
        show={showSuccess}
        onHide={handleCloseSuccess}
        backdrop="static"
        keyboard={false}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title>Thank you!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I have received your email and will respond to you as soon as I can.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseSuccess}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={showError}
        onHide={handleCloseError}
        backdrop="static"
        keyboard={false}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title>Please try again!</Modal.Title>
        </Modal.Header>
        <Modal.Body>There was an error with your submission.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseError}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Contact;
