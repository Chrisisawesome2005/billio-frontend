import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Title from "./Title";

const About = () => {
  return (
    <section id="about" className="text-center">
      <Container data-aos="fade-up" data-aos-delay="150">
        <Row>
          <Col>
            <Title title="About Us" text="Discover our story through video." />
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              Explore our journey and learn more about our vision and values.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="icon">
              <i className="ri-play-circle-line"></i>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
