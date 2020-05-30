import React from 'react';
import Farm from './Farm';

const FarmList = ({farms}) => {
  return (
      <div className="farm-list">
      {
        farms.map(farm => {
          return <Farm farm={farm} key={farm.id} />
        })
      }
      </div>
  )
};

export default FarmList;
