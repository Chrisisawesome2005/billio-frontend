import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Title from "./Title";

const Reviews = () => {
  const reviews = [
    {
      name: "Chris Badenhorst",
      role: "Web Developer",
      avatar: "/images/avatar_1.jpg",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      rating: 5,
    },
    {
      name: "Jane Smith",
      role: "Graphic Designer",
      avatar: "/images/avatar_2.jpg",
      content:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      rating: 5,
    },
    {
      name: "John Doe",
      role: "Marketing Specialist",
      avatar: "/images/avatar_3.jpg",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      rating: 5,
    },
  ];

  return (
    <section id="reviews">
      <Container>
        <Title
          title="Customer Reviews"
          text="Check out what our customers have to say about us!"
        />
        <Row>
          {reviews.map((review, index) => (
            <Col
              data-aos="fade-up"
              data-aos-delay="250"
              lg={4}
              sm={6}
              key={index}
              className="d-flex align-items-stretch"
            >
              <div className="review d-flex flex-column card-effect p-4">
                <div className="person-info d-flex align-items-center">
                  <img src={review.avatar} alt={review.name} />
                  <div className="ms-3 person-info d-flex flex-column justify-content-center mt-2">
                    <h6 className="mb-0">{review.name}</h6>
                    <small>{review.role}</small>
                  </div>
                </div>
                <div className="text-warning">
                  {Array.from({ length: review.rating }, (_, index) => (
                    <i key={index} className="ri-star-s-fill"></i>
                  ))}
                </div>
                <hr />
                <p>{review.content}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Reviews;
