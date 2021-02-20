import React from 'react';
import { Closing, Contact, LogoContainer, Phone, Address, LogoSVG, LinksBar, Legal, LegalContainer } from './ClosingComponents.jsx';

const Links = ['Privacy', 'Terms', 'Cookies',  'Accessibility', 'Sitemap'];

export default () => {
  return (
    <Closing>
      <Contact >
        <Phone><a href="tel:+6463893922" >(646) 389-3922</a></Phone>
        <Address>
          SpaceWork HQ, 115 W 18th St.
        </Address>
        <Address>
          New York, NY 10011
        </Address>          
      </Contact>
      <LogoContainer >
        <LegalContainer>
          <LinksBar>
            { Links.map(link => <li><a href="#" onClick={(e) => e.preventDefault()}>{ link }</a></li>)}
          </LinksBar>
          <Legal>
            Copyright © 2021 WeWork Companies Inc. All rights reserved
          </Legal>
        </LegalContainer>
        
        <LogoSVG />
      </LogoContainer>
    </Closing>
  );
};