import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Github from '../minis/Github'

// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
import Narratorium from "../../assets/narratorium.png";

const styles = {
  bold: {
    fontWeight: "700",
  },
  width: {
    width: "350px",
    borderRadius: '0',
  },
  maxWidth: {
    maxWidth: "992px",
  },
};
const Portfolio = () => {
  return (
    <section style={styles.maxWidth}>
      <h2>Portfolio</h2>
      <div>
        <img className="" src={Narratorium} alt="" style={styles.width} />
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0" style={styles.width}>
            <Accordion.Header>Narratorium <Github /></Accordion.Header>
            <Accordion.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </section>
  );
};

export default Portfolio;
