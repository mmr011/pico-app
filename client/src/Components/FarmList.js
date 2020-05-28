import React from 'react';
import Farm from './Farm';

const FarmList = props => {
  const farms = props.farms;
return (
    <div
      className="farm-list">
    {
      props.farms.map(farm => {
        return <Farm farm={farm} key={farm.id} />
      })
    }
    </div>
  )
};

export default FarmList;
