import React from "react";

import Name from "./minis/Name";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const styles = {
  name: {
    transform: "translateY(-50%)",
  },
}

const Header = ({page, handlePageChange}) => {

  return (
    <div >
      <Name />
      <Tabs
        activeKey={page}
        id="uncontrolled-tab-example" className="mb-3 justify-content-end"
        style={styles.name}
        onSelect={(page) => handlePageChange(page)}
      >
        <Tab eventKey="about" title="About"></Tab>
        <Tab eventKey="portfolio" title="Portfolio"></Tab>
        <Tab eventKey="contact" title="Contact" ></Tab>
        <Tab eventKey="resume" title="Resume" ></Tab>
      </Tabs>
    </div>
  );
};

export default Header;
