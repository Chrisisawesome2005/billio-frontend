import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Title from "./Title";

const Features = () => {
  const features = [
    {
      title: "Fully Responsive",
      description: "Ensure your website looks great and modern on all devices.",
      icon: "ri-scissors-2-line", // Chosen icon from Remixicons
    },
    {
      title: "Fast Loading",
      description: "Optimized for quick loading times and smooth performance.",
      icon: "ri-speed-line", // Chosen icon from Remixicons
    },
    // Add more features here...
    {
      title: "SEO Friendly",
      description:
        "Improve your search engine rankings with SEO-friendly design.",
      icon: "ri-search-eye-line", // Chosen icon from Remixicons
    },
    {
      title: "Easy Customization",
      description:
        "Easily customize and personalize your website according to your needs.",
      icon: "ri-settings-3-line", // Chosen icon from Remixicons
    },
    {
      title: "Secure",
      description:
        "Ensure the safety and security of your website and user data.",
      icon: "ri-lock-line", // Chosen icon from Remixicons
    },
    {
      title: "Modern Design",
      description:
        "Stay ahead with a sleek and modern website design from professionals.",
      icon: "ri-dribbble-line", // Chosen icon from Remixicons
    },
  ];

  return (
    <section id="features">
      <Container>
        <Row>
          <Col>
            <Title
              title="Key Features"
              text="Discover the key features of our service."
            />
          </Col>
        </Row>
        <Row className="g-4">
          {features.map((feature, index) => (
            <Col
              className="text-center d-flex align-items-stretch flex-column"
              lg={4}
              sm={6}
              key={index}
              data-aos="fade-down"
              data-aos-delay="150"
            >
              <div className="icon">
                <i className={feature.icon}></i>
              </div>
              <h4>{feature.title}</h4>
              <p>{feature.description}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
