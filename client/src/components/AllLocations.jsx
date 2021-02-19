import React, { useState } from 'react';
import { DropDownButton, AllLocationsSection, HeaderList, HeaderSection, LocationList, Locations, Country, City } from './AllLocationsComponents.jsx';
import { USA, JAPAN, ITALY, ISRAEL, CHINA, AUSTRALIA, FRANCE,IRELAND, GERMANY, BRAZIL, MEXICO, NETHERLANDS} from '../locations.js';

const locations = [USA, JAPAN, ITALY, ISRAEL, CHINA, AUSTRALIA, FRANCE,IRELAND, GERMANY, BRAZIL, MEXICO, NETHERLANDS];

const sections = [
  "Cities",
  "Office space",
  "Coworking space"
];


export default () => {
  const [dropdown, setDropdown] = useState(true);
  const [section, setSection] = useState(0);
  const handleDropDown = (e) => {
    e.preventDefault();
    setDropdown(!dropdown);
  }
  return (
    <AllLocationsSection>

      <DropDownButton href="#" onClick={handleDropDown}>
        All Locations &nbsp;<span className={`fas fa-caret-${dropdown ? 'up': 'down'}`}></span>        
      </DropDownButton>

      { dropdown && (
          <HeaderList>
            { sections.map((title, i) => (
              <HeaderSection 
                className={`${ section === i ? 'highlight-section': '' }`}
                onClick={() => setSection(i)}
                >
                  { title }
                </HeaderSection>)
            )}
          </HeaderList>
      )}

      { dropdown && (
         <Locations>
          {locations.map(({country, cities}) => {
            if(country) {
              return (
                <LocationList>
                  <Country>{ country }</Country>
                  {cities.map(city => <City>{ city }</City>)}
                </LocationList>
              );
            }    
          })}
         </Locations>
      )}

    </AllLocationsSection>
  );
};





