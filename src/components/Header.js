import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Header = ({ page, handlePageChange }) => {
  const [about, setAbout] = useState(false)
  const [portfolio, setPortfolio] = useState(false)
  const [contact, setContact] = useState(false)
  const [resume, setResume] = useState(false)

  const styles = {
    lato: {
      fontFamily: 'Lato',
      fontWeight: "700",
    }
  }
  return (
    <Navbar bg="" expand="lg">
      <Container>
        <Navbar.Brand className="lora" href="#home">&lt; Brandon Espinosa /&gt;</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav variant="pills" className="me-auto" >

            <Nav.Link
              onClick={() => {
                handlePageChange("about")
                setAbout(true)
                setPortfolio(false)
                setContact(false)
                setResume(false)
              }}
              eventKey="about"
              href="#"
              className={!!about && "white"}
              style={styles.lato}
            >
              About
            </Nav.Link>

            <Nav.Link
              onClick={() => {
                handlePageChange("portfolio")
                setAbout(false)
                setPortfolio(true)
                setContact(false)
                setResume(false)
              }}
              style={styles.lato}
              eventKey="portfolio"
              className={!!portfolio && "white"}>
              Portfolio
            </Nav.Link>

            <Nav.Link
              onClick={() => {
                handlePageChange("contact")
                setAbout(false)
                setPortfolio(false)
                setContact(true)
                setResume(false)
              }}
              style={styles.lato}
              eventKey="contact"
              className={!!contact && "white"}>
              Contact
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                handlePageChange("resume")
                setAbout(false)
                setPortfolio(false)
                setContact(false)
                setResume(true)
              }}
              style={styles.lato}
              eventKey="resume"
              className={!!resume && "white"}>
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
