import React from "react";
import Icon from "../../assets/brandon.png";

const styles = {
  icon: {
    width: "15%"
  },
};

const About = () => {
  return (
    <section className="container lato">
      <img src={Icon} alt="Brandon Espinosa" style={styles.icon} className="fluid rounded-circle my-3" />
      <h2 className="fs-1 lora">Salutons!</h2>
      <div>
        <p>I began my professional journey with the decision to serve my country and fellow Americans in the U.S. Army as a Special Operations Combat Medic in the 75th Ranger Regiment. The war took me to Afghanistan where I fulfilled my mission by serving my fellow soldiers as their combat medic.  For actions in the line of duty I was awarded the Army Commendation Medal for Valor.  I took from this experience an ethos of loyalty, duty, respect, selfless service, honor, integrity, and personal courage.
        </p>

        <p>Today, I am a Full stack web developer with a background in psychology and turbocharged about building the space of the future through the web. I recently earned a certificate in full stack development from UC Berkeley's Coding Bootcamp with developed skills in JavaScript, CSS, Node.js, React.js, and responsive web design. I'm driven to create projects that bring communities joy and driven to solve problems that bring ideas to reality. Most recently I utilized the MERN stack, Apollo server, and Graph QL with a group of 4 to create an app that helps individuals analyze their job search habits and patterns with data visualizations so they can develop or improve data-driven job seeking behaviors.  I'm eager to utilize my talents to contribute to an innovative and quality-driven team that helps me grow in my journey.</p>

        Best regards, <br />
        Brandon Espinosa
      </div>
    </section>
  );
};

export default About;
