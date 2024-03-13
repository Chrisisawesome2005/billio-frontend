// Contact.js

import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Title from "./Title"; // Import the Title component

const Contact = () => {
  return (
    <section id="contact" className="">
      <Container>
        <Title
          title="Contact Us"
          text="Feel free to reach out to us with any questions or inquiries."
        />{" "}
        {/* Use the Title component */}
        <Row className="justify-content-center">
          <Col md={8}>
            <Form>
              <Row className="g-3">
                <Col data-aos="fade-left" data-aos-delay="150" md={6}>
                  <Form.Control type="text" placeholder="Full name" />
                </Col>
                <Col md={6}>
                  <Form.Control
                    data-aos="fade-right"
                    data-aos-delay="250"
                    type="email"
                    placeholder="Email"
                  />
                </Col>

                <Col md={12}>
                  <Form.Control
                    data-aos="fade-up"
                    data-aos-delay="350"
                    type="text"
                    placeholder="Subject"
                  />
                </Col>
                <Col md={12}>
                  <Form.Control
                    data-aos="fade-down"
                    data-aos-delay="450"
                    as="textarea"
                    rows={4}
                    placeholder="Message"
                  />
                </Col>

                <Col md={12}>
                  <Button
                    data-aos="flip-left"
                    data-aos-delay="550"
                    className="btn-brand w-100"
                  >
                    Submit
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
