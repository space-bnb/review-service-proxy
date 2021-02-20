import React from 'react';
import LinksSection from './LinksSection.jsx';
import AllLocations from './AllLocations.jsx';
import { FooterSocial } from './StyledComponents.jsx';


export default () => {
  return (
    <div>
      <FooterSocial>
        <div className="links">
          <a href="#" className="social-links"><i class="fab fa-facebook-f"></i></a>
          <a href="#" className="social-links"><i class="fab fa-instagram"></i></a>
          <a href="#" className="social-links"><i class="fab fa-twitter"></i></a>
          <a href="#" className="social-links"><i class="fab fa-linkedin-in"></i></a>
        </div>
      </FooterSocial>
      <LinksSection />
    </div>
  );
};

