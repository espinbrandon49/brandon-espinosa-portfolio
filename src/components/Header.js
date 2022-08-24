import React from "react";
import Name from "./Name";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

// import Github from "./Github";
// import LinkedIn from "./LinkedIn";

const styles = {
  name: {
    display: "flex",
  },
}

const Header = () => {
  return (
    <div style={styles.name}>
      <Name />
      <Tabs defaultActiveKey="about" id="uncontrolled-tab-example" className="mb-3 justify-content-end">
        <Tab eventKey="about" title="About"></Tab>
        <Tab eventKey="portfolio" title="portfolio"></Tab>
        <Tab eventKey="contact" title="Contact" disabled></Tab>
        <Tab eventKey="resume" title="Resume" disabled></Tab>
      </Tabs>
    </div>
  );
};

export default Header;

// {
//   /* <span> <Github/> <LinkedIn/>
// </span> */
// }
