import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import AOS from "aos";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      // Add your AOS configuration options here, if needed
    });
  }, []);
  return (
    <div id="hero" className="d-flex align-items-center">
      <Container>
        <Row>
          <Col className="hero-content text-center mx-auto" lg={8}>
            <h1
              data-aos="fade-left"
              data-aos-delay="150"
              className="display-4 fw-bold"
            >
              We Design Remarkable and Stunning Bootstrap Websites
            </h1>
            <Row>
              <Col className="mx-auto" lg={8}>
                <p data-aos="fade-right" data-aos-delay="250">
                  Elevate your online presence with our expertly crafted
                  Bootstrap websites. We specialize in creating remarkable and
                  stunning designs that captivate your audience. Let us turn
                  your vision into reality and establish a digital presence that
                  sets you apart from the competition.
                </p>
              </Col>
            </Row>

            <Button
              data-aos="fade-down"
              data-aos-delay="350"
              className="btn-brand"
            >
              Get started
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
