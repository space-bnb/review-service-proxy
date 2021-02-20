import React, { useState, useEffect } from 'react';
import { AddressContainer } from './AddressComponents.jsx';

export default ({ info = null }) => {
  const [address, setAddress] = useState(info);

  useEffect( async () => {
    if(address === null) {
      let splitUrl = window.location.pathname.split('/').filter(el => el);
      let rawId =  splitUrl[splitUrl.length - 1];
  
      const id = parseInt(rawId);
  
      if (isNaN(id)) {
        setAddress(false);
        return;
      }

      try {
        let res = await fetch(`/api/nearbyworkspaces/buildings/${id}`);
        let { origin: { streetName, city, state, zipcode} } = await res.json();
        res = {
          city: city ? city : '', 
          state: state ? state : '', 
          zipcode: zipcode ? zipcode : '', 
          streetName: streetName ? streetName : ''
        };
        setAddress(res);
      } catch (error) {
        console.log(error.message);
        setAddress(false);
      }
  
    }
  }, []);

  if (address === null || address === false) return <></>;

  const { streetName, city, state, zipcode } = address;

  return (
    <AddressContainer>
      <p>{ streetName }</p>
      <p>{ city }, { state } { zipcode }</p>
    </AddressContainer>
  );
};