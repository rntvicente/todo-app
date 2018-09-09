import React from 'react';

export default props => (
  <headers className='page-header'>
    <h2>{props.name}<small>{props.small}</small></h2>
  </headers>
);
