import React from "react";
import Name from "./Name";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const styles = {
  name: {
    transform: "translateY(-50%)",
    // fontSize: "1.75vw",
  },
}

const Header = () => {
  return (
    <div >
      <Name />
      <Tabs defaultActiveKey="about" id="uncontrolled-tab-example" className="mb-3 justify-content-end" style={styles.name}>
        <Tab eventKey="about" title="About"></Tab>
        <Tab eventKey="portfolio" title="Portfolio"></Tab>
        <Tab eventKey="contact" title="Contact" ></Tab>
        <Tab eventKey="resume" title="Resume" ></Tab>
      </Tabs>
    </div>
  );
};

export default Header;

// import Github from "./Github";
// import LinkedIn from "./LinkedIn";
// {
//   /* <span> <Github/> <LinkedIn/>
// </span> */
// }
