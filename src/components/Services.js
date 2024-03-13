import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Title from "./Title";

const Services = () => {
  const services = [
    {
      name: "Graphic Designing",
      description: "Create stunning visuals that resonate with your audience.",
      img: "/images/image_1.jpg",
      icon: "ri-brush-4-line", // Chosen icon from Remixicons
    },
    {
      name: "Web Development",
      description: "Craft responsive and user-friendly websites.",
      img: "/images/image_2.jpg",
      icon: "ri-code-line", // Chosen icon from Remixicons
    },
    // Add more services here...
    {
      name: "Digital Marketing",
      description: "Boost your online presence and reach your target audience.",
      img: "/images/image_3.jpg",
      icon: "ri-line-chart-line", // Chosen icon from Remixicons
    },
  ];

  return (
    <section id="services">
      <Container>
        <Title
          title={"Our Services"}
          text={
            "Explore our range of services designed to meet your digital needs."
          }
        />
        <Row className="g-4">
          {services.map((service, index) => (
            <Col
              data-aos="fade-down"
              data-aos-delay="150"
              className="text-center"
              lg={4}
              sm={6}
              key={index}
            >
              <img src={service.img} alt={service.name} />
              <div className="icon">
                <i className={service.icon}></i>
              </div>
              <h4>{service.name}</h4>
              <p>{service.description}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
