import React from 'react';
import styled from 'styled-components';

export const ProxyContainer = styled.div`
  margin: auto;
  width: 90%;
  max-width: 1200px;
`;

export const BreadCrumbContainer = styled.div`
  border-top: 1px solid #e6e6e6;
  border-bottom: 1px solid #e6e6e6;
`;

export const BreadCrumbUL = styled.ul`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

export const BreadCrumbLI= styled.li`
  font-family: sans-serif;
  color: #666;
  font-size: .75rem;
  line-height: 1.5rem;
  padding: 20px 0px 20px 0px;
  cursor: pointer;
  text-decoration: none;
`;

export const FooterBG = styled.div`
  width: 100%;
  background: rgb(247,247,247);
`;

export const BracketR = () => (
  <span style={{fontSize: ".75rem"}}>
    &nbsp; <i class="fas fa-chevron-right"></i> &nbsp;
  </span>
);

export const FooterFirstRow = styled.div`
  color: #666;
  display: grid;
  grid-template-columns: 17% 17% 17% 17% 32%;
  padding-top: 75px;  
`;

export const FooterInfoTitle = styled.li`
  font-family: monospace;
  font-size: 1.2rem;
  margin-bottom: 20px;
`;

export const FooterInfoLink = styled.li`
  font-family: sans-serif;
  margin-bottom: 12px;
  font-size: .95rem;
  color: #4f0000;
`;

export const FooterBottomRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FooterContactInfo = styled.div`
  font-family: monospace;
  color: #4f0000;
  a {
    color: #8000ff;
  }
`;

export const LanguageLabel = styled.label`
  border-radius: 3px;
  background: white;
  top: -5px;
  left: 15px;
  position: absolute;
  font-size: .8rem;
  font-family: monospace, sans-serif;
  z-index: 1000;
  color: ${props => props.theme.langHighlight}
`;

export const FooterSocial = styled.div`
  position: relative;
  display: flex;
  padding-top: 0px;
  justify-content: flex-end;

  .links {
    color: black;
    display: flex;
    margin-bottom: 50px;
  }

  .social-links{
    color: black;
    font-size: 1.1rem;
    margin-left: 40px;
  }

  .language-option-hover:hover {
    background: rgb(247,247,247);
    object-fit: contain;
    border-radius: 5px;
  }

  .ml-auto {
    position: absolute;
    right: 50px;
    margin-left: auto;
  }
`;

export const LanguageOption = styled.a`
  position: relative;
  box-sizing: border-box;
  color: ${props => props.theme.langHighlight };
  width: 100%;
  text-decoration: none;
  display: block;
  padding: 15px 8px 15px 8px;
`;

export const SelectContainer = styled.div`
  z-index: 10;
  position: relative;
  width: 75%;
  display: block;
  padding: 0px;;
  background: white;
  box-sizing: border-box;
  border-radius: .25rem;
  border: 1px solid ${props => props.theme.langHighlight};
`;

export const Closing = styled.div`
  padding: 45px 0px 45px 0px;
  display: flex;
  justify-content: space-between;
`;

export const Contact = styled.div`

`;


