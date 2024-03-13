import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

function Navigation() {
  const [activeLink, setActiveLink] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveLink("hero");
      } else {
        const sections = document.querySelectorAll("section[id]");
        sections.forEach((section) => {
          const scrollY = window.pageYOffset;
          const sectionTop = section.offsetTop - 140;
          const sectionHeight = section.offsetHeight;
          const sectionId = section.getAttribute("id");

          if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            setActiveLink(sectionId);
          }
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeLink]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const margin = 0;
      const scrollToY =
        element.getBoundingClientRect().top + window.scrollY - margin;
      window.scrollTo({ top: scrollToY, behavior: "smooth" });
    }
  };

  return (
    <Navbar expand="lg" className="bg-white py-3 shadow" sticky="top">
      <Container>
        <Navbar.Brand href="#home">
          <span className="brand-name">BILLO.</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              onClick={() => {
                scrollToSection("hero");
              }}
              className={activeLink === "hero" ? "active" : ""}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                scrollToSection("services");
              }}
              className={activeLink === "services" ? "active" : ""}
            >
              Services
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                scrollToSection("about");
              }}
              className={activeLink === "about" ? "active" : ""}
            >
              About
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                scrollToSection("features");
              }}
              className={activeLink === "features" ? "active" : ""}
            >
              Features
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                scrollToSection("reviews");
              }}
              className={activeLink === "reviews" ? "active" : ""}
            >
              Reviews
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                scrollToSection("blog");
              }}
              className={activeLink === "blog" ? "active" : ""}
            >
              Blog
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                scrollToSection("contact");
              }}
              className={activeLink === "contact" ? "active" : ""}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
