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
    <section className="container" style={styles.maxWidth}>
      <h2 className="lora mb-5">Portfolio</h2>
      <Project/>
    </section>
  );
};

export default Portfolio;
