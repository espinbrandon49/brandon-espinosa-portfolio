import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  //input
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

  //form submit
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
    <Form className="container p-5">
      <h2 className="mb-3 lora">Contact</h2>
      <FloatingLabel controlId="floatingPassword" label="name">
        <Form.Control
          type="text"
          placeholder="First Name Last Name" 
          className="mb-3 lato"
          name="name"
          value={name}
          onChange={handleInputChange}
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput" label="email" className="mb-3 lato">
        <Form.Control
          type="email"
          placeholder="name@example.com"
          name="email"
          value={email}
          onChange={handleInputChange}
          />
      </FloatingLabel>

      <FloatingLabel controlId="floatingTextarea2" label="Comments" className="mb-3 lato">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: "100px" }}
          name="comment" 
          value={comment}
          onChange={handleInputChange}
          />
      </FloatingLabel>

      <Button
        variant="secondary w-100 btn-md lato fs-5"
        type="submit"
        onClick={() => handleFormSubmit()}
        >
        Submit
      </Button>

      {errorMessage && (
        <div>
          <p className="invalid-feedback">{errorMessage}</p>
        </div>
      )}

    </Form>
  );
}

export default Contact;
