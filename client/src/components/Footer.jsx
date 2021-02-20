import React from 'react';
import { ProxyContainer, FooterBG, BreadCrumbContainer, BreadCrumbUL, BreadCrumbLI, BracketR, FooterFirstRow } from './StyledComponents.jsx';
import FooterSocialBlock from './FooterSocialBlock.jsx';
import AllLocations from './AllLocations.jsx';
import Closing from './Closing.jsx';

import { Listify, COMPANY, PARTNERSHIPS, IMPACT, SUPPORT } from './FooterInfo.jsx';

export default () => {
  return (
    <FooterBG>
        <BreadCrumbContainer >
          <ProxyContainer>
            <BreadCrumbUL>
              <BreadCrumbLI> All Locations <BracketR /></BreadCrumbLI>
              <BreadCrumbLI> Europe <BracketR /> </BreadCrumbLI>
              <BreadCrumbLI> London <BracketR /></BreadCrumbLI>
              <BreadCrumbLI> King's Cross <BracketR /></BreadCrumbLI>
              <BreadCrumbLI> Salesforce Tower </BreadCrumbLI>
            </BreadCrumbUL>
            </ProxyContainer>
          </BreadCrumbContainer>
      <ProxyContainer>
      <FooterFirstRow >
              <div>
                <Listify {...COMPANY} />
              </div>
              <div>
                <Listify {...PARTNERSHIPS} />
              </div>
              <div>
                <Listify {...IMPACT } />
              </div>
              <div>
                <Listify { ...SUPPORT } />
              </div>
              <FooterSocialBlock />
            </FooterFirstRow>
            <AllLocations />
            <Closing />
      </ProxyContainer>
    </FooterBG>
    
  )
};