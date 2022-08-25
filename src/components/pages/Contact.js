//make a contact form with useState values and email
//stu-16

import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

const styles = {
  width: {
    maxWidth: "481px",
    margin: "0 auto",
  },
};

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "name") {
      setName(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    } else {
      setComment(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email) || !name || !comment) {
      setErrorMessage("invalid submission");
      return;
    }

    console.log(name, email, comment)

     setName('')
     setEmail('')
     setComment('')
  };

  const validateEmail = (email) => {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
  };

  return (
    <Form style={styles.width}>
      <h2 className="mb-3">Contact</h2>

      <FloatingLabel controlId="floatingPassword" label="name">
        <Form.Control
          type="text"
          placeholder="First Name Last Name" 
          className="mb-3"
          name="name"
          value={name}
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput" label="email" className="mb-3">
        <Form.Control
          type="email"
          placeholder="name@example.com"
          name="email"
          value={email}
          />
      </FloatingLabel>

      <FloatingLabel controlId="floatingTextarea2" label="Comments" className="mb-3">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: "100px" }}
          name="comment" 
          value={comment}
          />
      </FloatingLabel>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Contact;
