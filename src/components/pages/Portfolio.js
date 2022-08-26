import React from "react";
import Project from '../minis/Project'

const styles = {
  maxWidth: {
    maxWidth: "992px",
    margin: '0 auto',
  },
};

const Portfolio = () => {
  return (
    <section style={styles.maxWidth}>
      <h2>Portfolio</h2>
      <Project/>
    </section>
  );
};

export default Portfolio;
