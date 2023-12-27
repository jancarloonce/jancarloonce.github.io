/* eslint-disable no-undef */

import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import styled from "styled-components";
import { animated, useSpring } from "react-spring";
import { Jumbotron } from "./migration"; // Importing Jumbotron from the "migration" module

// Styled components
const StyledJumbotron = styled(Jumbotron)`
  background-color: #f8f9fa; // Customize background color
`;

const AnimatedContainer = animated(Container);

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle the form submission (e.g., sending an email, saving to a database)
    console.log("Form submitted:", formData);
    // Optionally, you can reset the form fields after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  // Animation for the container
  const containerSpring = useSpring({
    opacity: 1,
    marginTop: 0,
    from: { opacity: 0, marginTop: -50 },
  });

  return (
    <StyledJumbotron fluid className="m-0">
      <AnimatedContainer style={containerSpring}>
        <h2 className="display-4 pb-4 text-center">Contact Me</h2>
        <Form onSubmit={handleSubmit}>
          {/* Form fields go here */}
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Your name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Your email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Your message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              style={{ height: "100px" }} // Adjusted height
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="mt-3">
            Submit
          </Button>
        </Form>
      </AnimatedContainer>
    </StyledJumbotron>
  );
};

export default ContactMe;

/* eslint-enable no-undef */
