import React from 'react'
import Github from './Github'
import LinkedIn from './LinkedIn'
const styles = {
  contact: {
    display: "flex",
    justifyContent: 'space-around',
    listStyle: 'none',
  },
  select: {
    userSelect: "all",
  }
}

const Contact = () => {
  return (
    <footer>
      <ul style={styles.contact} >
        <li>
          <a href="www.linkedin.com/in/brandon-espinosa-b65a0b241">
            <LinkedIn />
          </a>
        </li>
        <li>(424)-341-1618</li>
        <li style={styles.select}>
          portfolioLinkEmail@gmail.com
        </li>
        <li>
          <a href="https://github.com/espinbrandon49">
            <Github />
          </a>
        </li>

      </ul>
    </footer>
  )
}

export default Contact
