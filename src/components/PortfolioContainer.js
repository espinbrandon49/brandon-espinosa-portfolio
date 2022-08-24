import React, { useState } from 'react'

import About from './pages/About'
import Portfolio from './pages/Portfolio'
// import Contact from './Footer'
// import Resume from './Footer'
import Header from './Header'
import Footer from './Footer'

const styles = {
  width: {
    maxWidth: "1200px",
    margin: "0 auto"
  },
}

const PortfolioContainer = () => {
  const [key, setKey] = useState('About');

  const renderPage = () => {
    if (key === 'about') {
      return <About />
    }
    if (key === 'portfolio') {
      return <Portfolio />
    }
    //     {/* <Contact/> */}
    // {/* <Resume/> */}
    return <About />
  }

  const handlePageChange = (key) => setKey(key);

  return (
    <div className="App" style={styles.width}>
      <Header key={key} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  )
}

export default PortfolioContainer
