import React from 'react';

function ScrollToTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button onClick={scrollToTop} className="scroll-to-top">
      ↑
    </button>
  );
}

export default ScrollToTop;
