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
      <h2 className="fs-1 lora">Hello!</h2>
      <div>
        <p>I began my career as an adult with the decision to serve my country and fellow Americans in the U.S. Army as a special operations combat medic and in the 3rd Airborne Ranger Battalion. The war took me to Afghanistan where I fulfilled my mission by serving my fellow soldiers as the sole healthcare provider for my platoon of 60 Rangers in garrison and in combat. After my honorable discharge, I pursued a career in human resources with a Bachelor's of Science in Psychology serving a company I love, Smith Hampton & Devlin, LLC, a boutique staffing firm based in Oakland, CA for over 10 years.  The company dissolved in 2021 and I took this as an opportunity to pursue a career in technology where I can continue to serve at a much different scale.</p>
        <p>
          I bring to any community I am a part of an attitude of service. I don't know how to give less than 150% as a contributor and relish opportunities to give more. Since the day I turned 17 and thus old enough to be of service to others on my own volition, I drilled, trained, studied and cultivated my practice of the core Army values,<em> Loyalty, Duty, Respect, Selfless Service, Honor, Integrity, and Personal Courage</em> and bring this ethos to my every interaction.
        </p>
        <p>Outside of my proficiency in LDRSHIP, I am also proficient in the theory and application of web development in current technologies including the MERN stack. My technical proficiencies extend to:</p>
        <ul>
          <li>Browser based technologies HTML/CSS, JavaScript, React.JS, Bootstrap, web API, jQuery, responsive design, PWA's.</li>
          <li>Databases - MongoDB, Mongoose, MySQL, Sequelize</li>
          <li>Server side development using Express.js, Node.js, various template engines such as handlebars, user authentication.</li>
          <li>API design technologies such as Rest, JSON, AJAX (Fetch API), HTTP request methods, and GraphQL</li>
          <li>Deployment and delivery, continuous integration, Git, GitHub, Heroku, Netlify, shell scripting and unit testing</li>
          <li>Computer Science theory, algorithms, performance, time complexity, Big O notation, data structures.</li>
        </ul>
        <p>
        Thanks for taking the time to read.  I'd love to from you regarding employment opportunities, projects, or Salutons.
        </p> 
        
        Salud, <br/>
        Brandon Espinosa
      </div>
    </section>
  );
};

export default About;
