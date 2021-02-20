import React, { useEffect, useState } from 'react';
import { WorkspaceName } from './HeaderComponents.jsx';

export default ({ title = null }) => {
  const [name, setName] = useState(title);
  
  useEffect( async () => {
    if(name === null) {
      let splitUrl = window.location.pathname.split('/').filter(el => el);
      let rawId =  splitUrl[splitUrl.length - 1];
  
      const id = parseInt(rawId);
  
      if (isNaN(id)) {
        setName(false);
        return;
      }

      try {
        let res = await fetch(`/api/workspace-description/${id}`);
        let { name } = await res.json();
        setName(name);
      } catch (error) {
        console.log(error.message);
        setName(false);
      }
  
    }
  }, [])

  if (name === null) {
    return (
      <WorkspaceName>Loading</WorkspaceName>
    )
  }

  if (name === false) {
    return (
      <WorkspaceName>Error</WorkspaceName>
    )
  }


  return (
    <>
      <WorkspaceName>
        { name }
      </WorkspaceName>
      
    </>
  )
}