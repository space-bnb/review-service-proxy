import React, { useState } from 'react';
import { FooterSocial, LanguageLabel, SelectContainer, LanguageOption } from './StyledComponents.jsx';
import { ThemeProvider } from 'styled-components';

const LANGUAGES = [
  "English",
  "Spanish",
  "Dutch"
];

export default () => {
  const [lang, setLang] = useState("English");
  const [dropdown, setDropdown] = useState(false);
  const [theme, setTheme] = useState({langHighlight: 'black'});



  const handleLanguageChange = (lang) => (e) => {
    e.preventDefault();
    setLang(lang);
    handleUnhighlight();
  };

  const handleHighlight = () => {
    setTheme({
      langHighlight: 'blue'
    });
  };

  const handleUnhighlight = () => {
    if (dropdown) handleDropdown();
    setTheme({
      langHighlight: 'black'
    })
  }

  const handleDropdown = () => {
    handleHighlight();
    setDropdown(!dropdown);
  };

  return (
      <FooterSocial >
        <ThemeProvider theme={theme}>
          <SelectContainer onBlur={() => setTimeout(handleUnhighlight, 300)}>
            <LanguageLabel >Language</LanguageLabel>
            <LanguageOption href="#" value={lang} onClick={(e) => {e.preventDefault(); handleDropdown()}}>
                { lang } 
              <span className="ml-auto"><i class={`fas fa-caret-${dropdown ? 'up': 'down'}`}></i>
              </span>
            </LanguageOption>
            { dropdown && LANGUAGES.filter(language => language !== lang).map(language => (
              <LanguageOption
                href="#"
                className="language-option-hover" 
                onClick={handleLanguageChange(language)}>{ language }
              </LanguageOption>
            ))}
          </SelectContainer>
        </ThemeProvider>
      </FooterSocial>
  );
};