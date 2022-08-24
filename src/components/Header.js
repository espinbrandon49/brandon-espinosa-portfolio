import React from "react";

import Name from "./minis/Name";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const styles = {
  name: {
    transform: "translateY(-50%)",
    // fontSize: "1.75vw",
  },
}

const Header = ({key, handlePageChange}) => {
  // const [key, setKey] = useState('about');

  // function changeRender(key) {
  //   if (key === 'about') {
  //     console.log(key)
  //   } else if (key === 'portfolio') {
  //     console.log(key)
  //   } else if (key === 'contact') {
  //     console.log(key)
  //   } else if (key === 'resume') {
  //     console.log(key)
  //   }
  //   return key
  // }

  return (
    <div >
      <Name />
      <Tabs
        activeKey={key}
        id="uncontrolled-tab-example" className="mb-3 justify-content-end"
        style={styles.name}
        onSelect={(key) => handlePageChange(key)}
        // onSelect={(k) => setKey(k)}
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

// import Github from "./Github";
// import LinkedIn from "./LinkedIn";
// {
//   /* <span> <Github/> <LinkedIn/>
// </span> */
// }
