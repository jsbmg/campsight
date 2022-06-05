import React from 'react';

const SiteRow = ({site}) => {
  console.log(site);
  return (
    <div>{site.site} {site.type_of_use} {site.loop}</div>
  )
}

export default SiteRow;
