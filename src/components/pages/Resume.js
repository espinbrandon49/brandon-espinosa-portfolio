import React from "react";
import pdf from "../../assets/Brandon_Espinosa_Resume.pdf"
const styles = {
  width: {
    maxWidth: "992px",
  },

};

const Resume = () => {
  return (
    <section className="mx-5" style={styles.width}>
      <h2 className="my-4">Resume <a className="btn btn-primary" href={pdf} target='__blank' download>download</a></h2>

      <div className="mb-4">
        <h5 className="mb-1">U.C. Berkeley Extension Fullstack Coding Bootcamp</h5>
        <p className="mb-1">June 2022 - September 2022</p>
        <p className="mb-1">Technical Skills</p>
        <ul>
          <li>
            <strong>Browser based technologies: </strong>HTML/CSS, JavaScript, React.JS, Bootstrap , web API, jQuery, responsive design, PWA's
          </li>
          <li>
            <strong>Databases: </strong>MongoDB, Mongoose and MySQL, Sequelize
          </li>
          <li>
            <strong>Server side development: </strong>Express.js, Node.js, various template engines, user authentication
          </li>
          <li>
            <strong>API design technologies: </strong>Rest, JSON, AJAX (Fetch API), HTTP request methods, and GraphQL
          </li>
          <li>
            <strong>Deployment and delivery: </strong> Continuous integration, Git, GitHub, Herorku, shell scripting and unit testing
          </li>
          <li>
            <strong>Computer Science theory: </strong>Algorithms, performance, time complexity, Big O notation, data structures
          </li>
        </ul>
      </div>

      <div className="mb-4">
        <h5 className="mb-1">Smith Hampton & Devlin, LLC - Staffing Operations Manager</h5>
        <p className="mb-1">December 2009 - December 2021</p>
        <p className="mb-1">Oakland, CA</p>
        <ul>
          <li>Implement staffing and recruiting processes, strategies, and solutions</li>
          <li>Executive Assistant to the Principal</li>
          <li>Recruiter</li>
        </ul>
      </div>

      <div className="mb-4">
        <h5 className="mb-1">San Francisco State University</h5>
        <p className="mb-1">December 2006 - December 2009</p>
        <p className="mb-1">San Francisco, CA</p>
        <ul>
          <li>Bachelor of Science in Psychology</li>
        </ul>
      </div>

      <div>
        <h5 className="mb-1">U.S. Army - Special Operations Combat Medic</h5>
        <p className="mb-1">September 2001 - June 2006</p>
        <p className="mb-1"> 3rd Airborne Ranger Battalion, Ft. Benning, GA</p>

        <ul>
          <li>Honorable Discharge, two commendation medals for valor in combat</li>
          <li>Afghanistan Campaign Medal</li>
          <li>Supported unit readiness by providing healthcare support in garrison and in the field</li>
          <li>Loyalty, Duty, Respect, Selfless Service, Honor, Integrity, Personal Courage</li>
        </ul>
      </div>
    </section>
  );
};

export default Resume;
