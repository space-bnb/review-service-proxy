import React from 'react';
import { FooterInfoTitle, FooterInfoLink } from './StyledComponents.jsx';

// Company Partnerships Impact Support
export const Listify = ({ title, links}) => {
  return (
    <ul>
      <FooterInfoTitle>{ title }</FooterInfoTitle>
      { links.map(link => (
        <FooterInfoLink>
          <span>
            { link }
          </span>
        </FooterInfoLink>
        )
      )}
    </ul>
  )
};

export const COMPANY = {
  title: 'COMPANY',
  links: [
    `Global Locations`,
    'Mission',
    'Inclusion & Diversity',
    'Careers',
    'Investors',
    'Newsroom'
  ]
};

export const PARTNERSHIPS = {
  title: 'PARTNERSHIPS',
  links: [
    `Brokers`,
    `Landlords`,
    'Refer a Friend',
    'Event Planners',
    'Referral Partners'
  ]
};

export const IMPACT = {
  title: 'IMPACT',
  links: [
    'Refugee Initiative',
    'Veterans in Residence'
  ]
};

export const SUPPORT = {
  title: 'SUPPORT',
  links: [
    'COVID Response',
    'FAQ',
    'Contact Us'
  ]
};
