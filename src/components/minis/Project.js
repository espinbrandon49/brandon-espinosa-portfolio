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
  noTextDecoration: {
    textDecoration: "none",
  },
  flexContainer: {
    display: "flex",
    maxWidth: "992px",
    flexWrap: 'wrap',
    justifyContent: "space-evenly",
  }
};

const project = () => {
  console.log(Projects)

  return (
    <div style={styles.flexContainer}>
      {Projects.map((project, i) => {

        return (
          <div key={i} className="mb-3">
          <img src={require(`../../assets/${project.img}.png`)} alt={project.imgAlt} style={styles.width} />
          <Accordion >
            <Accordion.Item eventKey={i} style={styles.width}>
              <Accordion.Header>
                {Projects[0].name}
                <span style={{ marginLeft: ".5rem" }}>
                 <a style={styles.noTextDecoration} href={project.githubRepo}><Github /></a> 
                 <a style={styles.noTextDecoration} href={project.deployedLink}> <Globe /></a>
                </span>
              </Accordion.Header>
              <Accordion.Body>
                <p>{project.description}</p>
                <p>{project.tools}</p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        )
      })}
    </div>
  );
};

export default project;
