import React, { useState } from 'react';

const Navbar = ({ setCategory }) => {
  const [activeLink, setActiveLink] = useState('');

  const handleCategoryClick = (category) => {
    setCategory(category);
    setActiveLink(category);  // Update the active link
  };

  return (
    <>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><span className='badge bg-light text-dark fs-4'>News Mag</span></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <div 
                  className={`nav-link ${activeLink === 'business' ? 'text-primary' : ''}`} 
                  onClick={() => handleCategoryClick('business')} style={{cursor:"pointer"}}>
                  Business
                </div>
              </li>
              <li className="nav-item">
                <div 
                  className={`nav-link ${activeLink === 'entertainment' ? 'text-primary' : ''}`} 
                  onClick={() => handleCategoryClick('entertainment')} style={{cursor:"pointer"}}>
                  Entertainment
                </div>
              </li>
              <li className="nav-item">
                <div 
                  className={`nav-link ${activeLink === 'health' ? 'text-primary' : ''}`} 
                  onClick={() => handleCategoryClick('health')} style={{cursor:"pointer"}}>
                  Health
                </div>
              </li>
              <li className="nav-item">
                <div 
                  className={`nav-link ${activeLink === 'science' ? 'text-primary' : ''}`} 
                  onClick={() => handleCategoryClick('science')} style={{cursor:"pointer"}}>
                  Science
                </div>
              </li>
              <li className="nav-item">
                <div 
                  className={`nav-link ${activeLink === 'sports' ? 'text-primary' : ''}`} 
                  onClick={() => handleCategoryClick('sports')} style={{cursor:"pointer"}}>
                  Sports
                </div>
              </li>
              <li className="nav-item">
                <div 
                  className={`nav-link ${activeLink === 'technology' ? 'text-primary' : ''}`} 
                  onClick={() => handleCategoryClick('technology')} style={{cursor:"pointer"}}>
                  Technology
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
