import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Title from "./Title";

const Counter = () => {
  const counters = [
    {
      count: "45,00",
      label: "Awards Won",
      icon: "ri-trophy-line", // Chosen icon from Remixicons
    },
    {
      count: "120",
      label: "Happy Clients",
      icon: "ri-user-heart-line", // Chosen icon from Remixicons
    },
    {
      count: "80",
      label: "Projects Completed",
      icon: "ri-briefcase-line", // Chosen icon from Remixicons
    },
    {
      count: "100%",
      label: "Customer Satisfaction",
      icon: "ri-emotion-happy-line", // Chosen icon from Remixicons
    },
  ];

  return (
    <section id="counter">
      <Container>
        <Title
          title="Our Achievements"
          text="Discover our achievements and milestones."
        />
        <Row>
          {counters.map((counter, index) => (
            <Col
              data-aos="fade-up"
              data-aos-delay="150"
              className="text-center"
              lg={3}
              sm={6}
              key={index}
            >
              <i className={counter.icon}></i>
              <h3>{counter.count}</h3>
              <p>{counter.label}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Counter;
