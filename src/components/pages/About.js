import React from 'react'
import Icon from '../../assets/brandon.png'

const styles = {
  about: {
    display: "flex",
  },
  icon: {
    width: '100px',
    },
}

const About = () => {
  return (
    <section style={styles.about} >
        <img
          src={Icon}
          alt="Brandon Espinosa"
          style={styles.icon}
          className='fluid rounded-circle'
        />
        <div>
          <h2>Hello!</h2>
          <p>
            I'm Brandon, a student at UC Berkeley Boot Camp and
            based in Los Angeles, CA. Thank you for viewing my
            collection of works I developed using CSS, HTML, and
            JavaScript.
          </p>
        </div>
    </section>
  )
}

export default About
