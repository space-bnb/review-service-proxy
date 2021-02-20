import styled from 'styled-components';

export const Closing = styled.div`
  padding: 20px 0px 20px 0px;
  border-top: 1px solid rgb(227,227,227);
  display: flex;
  justify-content: space-between;
`;

export const Contact = styled.div`
  display: block;
  padding: 20px 0px 30px 0px;
`;

export const LogoContainer = styled.div`
  padding: 22px 0px 10px 0px;
  display: flex;
  justify-content: flex-end;

`;

export const Phone = styled.div`
  display: block;
  a {
    font-size: 1.2rem;
    font-family: monospace;
    text-decoration: none;
    color: rgb(0, 0, 255);
  }
  padding-bottom: 6px;
`;

export const Address = styled.p`
  font-size: 1.2rem;
  color: #4f0000;
  font-family: monospace;
  padding: 6px 0px;
`;

export const LinksBar = styled.ul`
  list-style: none;
  padding-right: 15px;
  li {
    display: inline;
    margin-left: 15px;
  }
  a {
    font-size: .9rem;
    font-family: sans-serif;
    color: #00f;
    text-decoration: none;
  }
`;

export const LegalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Legal = styled.p`
  font-size: .9rem;
  color: rgb(134,131,102);
  padding: 25px 15px 0px 0px;
`;

export const LogoSVG = styled.img`
  height: 60px;
  width: 60px;
  content: url(https://spacework-bundles.s3-us-west-1.amazonaws.com/we_logo.a32545795fe3f59def511d1b8069c271.svg);
`;