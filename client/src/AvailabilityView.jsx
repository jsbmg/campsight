import React from 'react';
import { useEffect, useState } from 'react';

import SiteRow from './SiteRow';

const AvailabilityView = () => {
  const [sites, setSites] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const getAvailable = async () => {
      try {
        const response = await fetch('/api');
        const data = await response.json();
        setSites(data[Object.keys(data)[0]]);
        setLoaded(true);
      } catch (error) {
        console.log(error);
      }
    }

    getAvailable();
  }, []);

  if (!loaded) { return null };

  return (
    <div className='availability-view'>
      {Object.keys(sites).map(site => <SiteRow site={sites[site]} />)}
    </div>
  )
}

export default AvailabilityView;
