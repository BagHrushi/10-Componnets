import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <h2>Our Portfolio</h2>
      <p>Check out some of our amazing projects below:</p>
      <div className="portfolio-grid">
        <div className="portfolio-item">Project 1</div>
        <div className="portfolio-item">Project 2</div>
        <div className="portfolio-item">Project 3</div>
      </div>
    </section>
  );
}

export default Portfolio;
