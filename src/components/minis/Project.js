import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Github from "./Github";
import Globe from "./Globe";
import Projects from "../../assets/projectsDB.js";

const styles = {
  width: {
    width: "350px",
    height: "300px",
    borderRadius: "0",
    background: 'black',
    border: '1px solid snow',
  },
  noTextDecoration: {
    textDecoration: "none",
  },
  flexContainer: {
    display: "flex",
    maxWidth: "992px",
    flexWrap: 'wrap',
    justifyContent: "space-evenly",
  },
  width2: {
    width: "350px",
    borderRadius: "0",
  },
  link: {
    border: '2px solid black',
  }
};

const Project = () => {
  return (
    <div style={styles.flexContainer}>
      {Projects.map((project, i) => {
        return (
          <div key={i} className="mb-3">
            <img src={require(`../../assets/${project.img}.png`)} alt={project.imgAlt} style={styles.width} />
            <Accordion >
              <Accordion.Item eventKey={i} style={styles.width2} >
                <Accordion.Header >
                  {project.name}
                  <div style={{ marginLeft: "1.5rem" }}>
                    <a style={styles.noTextDecoration} href={project.githubRepo}><Github /></a>
                    <a style={styles.noTextDecoration} href={project.deployedLink}> <Globe /></a>
                  </div>
                </Accordion.Header >
                <Accordion.Body>
                  <p>{project.description}</p>
                  <p>{project.technologies}</p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        )
      })}
    </div>
  );
};

export default Project;
