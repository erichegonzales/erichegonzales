import { Container, Form, Row, Col, Button } from "react-bootstrap";
import Transitions from "./Transitions";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { init } from "@emailjs/browser";
init("REACT_APP_EMAILJS_SERVICE_ID");
init("REACT_APP_EMAILJS_TEMPLATE_ID");
init("REACT_APP_EMAILJS_USER_ID");

const Contact = () => {
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
          },
          (error) => {
            console.log(error.text);
          }
        );
  };

  return (
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
      </Container>
    </Transitions>
  );
};

export default Contact;
