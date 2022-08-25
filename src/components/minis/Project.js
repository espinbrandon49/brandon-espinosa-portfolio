import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Github from "./Github";
import Globe from "./Globe";
import Narratorium from "../../assets/narratorium.png";
import Projects from "../../assets/projectsDB.js";

const styles = {
  width: {
    width: "350px",
    borderRadius: "0",
  },
  maxWidth: {
    maxWidth: "992px",
  },
  noTextDecoration: {
    textDecoration: "none",
  }
};

const project = () => {
  console.log(Projects[0].githubRepo)

  return (
    <div>

      {Projects.map((project, i) => {
        return (
          <div key="i">
          <img src={project.img} alt={project.imgAlt} style={styles.width} />
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0" style={styles.width}>
              <Accordion.Header>
                {Projects[0].name}
                <span style={{ marginLeft: ".5rem" }}>
                 <a style={styles.noTextDecoration} href={project.githubRepo}><Github /></a> 
                 <a style={styles.noTextDecoration} href={project.deployedLink}> <Globe /></a>
                </span>
              </Accordion.Header>
              <Accordion.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        )
      })}
    </div>
  );
};

export default project;
