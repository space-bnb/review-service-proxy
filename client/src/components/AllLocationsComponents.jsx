import styled from 'styled-components';

export const AllLocationsSection = styled.div`
  padding: 40px 0px 40px 0px;
`;
export const DropDownButton = styled.a`
  color: blue;
  text-decoration: none;
  margin-bottom: 30px;
`;

export const HeaderList = styled.div`
  display: flex;
  padding: 30px 0px 0px 0px;
  width: 100%;
  border-bottom: 1px solid rgb(227,227,227);
  .highlight-section {
    color: #00f;
    border-bottom: 1px solid #00f;
  }
`;

export const HeaderSection = styled.div`
  padding: 0px 10px 12px 12px;
  cursor: pointer;
`;

export const Locations = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  flex-wrap: wrap;
  max-height: 800px;
  overflow-y: hidden;
`;

export const Country = styled.li`
  font-size: 1.2rem;
  color: #666;
  padding: 30px 0px 12px 0px;
  font-family: monospace;
  cursor: pointer;
`;

export const LocationList = styled.ul`
  list-style: none;
  width: 150px;
`;

export const City = styled.li`
  padding: 7px 0px 7px 0px;
  font-size: .95rem;
  font-family: sans-serif;
  color: #4f0000;
  cursor: pointer;
`;