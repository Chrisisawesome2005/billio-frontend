// Blog.js

import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import Title from "./Title"; // Import the Title component

const Blog = () => {
  // Array of blog objects
  const blogs = [
    {
      id: 1,
      image: "/images/blog_post1.png",
      date: "22 December 2022",
      title: "Website Design in Bootstrap",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      image: "/images/blog_post2.png",
      date: "25 December 2022",
      title: "Responsive Web Design Principles",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 3,
      image: "/images/blog_post3.png",
      date: "30 December 2022",
      title: "Tips for Improving Website Performance",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <section id="blog">
      <Container>
        <Title title="Blog Posts" text="Check out our latest blog posts." />{" "}
        {/* Use the Title component */}
        <Row>
          {blogs.map((blog) => (
            <Col
              data-aos="fade-up"
              data-aos-delay="150"
              lg={4}
              md={6}
              key={blog.id}
              className="mb-4"
            >
              <img src={blog.image} alt={blog.title} />
              <small>Posted on {blog.date}</small>
              <h6 className="mt-2 mb-1">{blog.title}</h6>
              <p>{blog.content}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Blog;
