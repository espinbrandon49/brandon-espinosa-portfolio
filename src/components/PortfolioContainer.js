import React, { useState } from 'react';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Header from './Header';
import Footer from './Footer';
import './app.css'

const PortfolioContainer = () => {
  const [page, setPage] = useState('about');

  const renderPage = () => {

    if (page === 'contact') {
      return <Contact />
    };

    if (page === 'portfolio') {
      return <Portfolio />
    };

    if (page === 'resume') {
      return <Resume />
    };

    return <About />
  };

  const handlePageChange = (page) => setPage(page);
  return (
    <div className="App container" >
      <Header page={page} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  )
};

export default PortfolioContainer;
