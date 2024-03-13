import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="pt-3">
      <Container>
        <Row>
          <Col md={10}>
            <p className="text-white">Copyright &copy; 2015-2020</p>
          </Col>
          <Col md={2}>
            <div className="sosial-icons">
              <i className="ri-facebook-fill"></i>
              <i className="ri-twitter-fill"></i>
              <i className="ri-tiktok-fill"></i>
              <i className="ri-instagram-fill"></i>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
