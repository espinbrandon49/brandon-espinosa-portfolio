import React from 'react'
import Header from './Header'
import Main from './Main'
import Contact from './Contact'

const styles = {
  width: {
    maxWidth: "1200px",
    margin: "0 auto"
  },
}

const PortfolioContainer = () => {
  return (
    <div className="App" style={styles.width}>
      <Header />
      <Main />
      <Contact />
    </div>
  )
}

export default PortfolioContainer
