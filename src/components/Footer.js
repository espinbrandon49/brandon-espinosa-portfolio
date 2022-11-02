import React from 'react'
import Github from './minis/Github'
import LinkedIn from './minis/LinkedIn'
import Medium from './minis/Medium'

const styles = {
  contact: {
    display: "flex",
    justifyContent: 'space-evenly',
    listStyle: 'none',
    padding: "40px 0",
  },
  select: {
    userSelect: "all",
  }
}

const Footer = () => {
  return (
    <footer>
      <ul style={styles.contact} >
        <li>(424)-341-1618</li>
        <li style={styles.select}>
          portfolioLinkEmail@gmail.com
        </li>
        <li>
          <a href="https://github.com/espinbrandon49">
            <Github />
          </a>
          <span> </span>
          <a href="https://www.linkedin.com/in/brandon-espinosa-b65a0b241">
            <LinkedIn />
          </a>
          <span> </span>
          <a href="espinbrandon49.medium.com">
            <Medium />
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
