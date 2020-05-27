import React from 'react';
import Farm from './Farm';

const FarmList = props => {
  return (
    <div className="farm-list">
    {
      props.farms.map(farm => {
        return <Farm farm={farm} key={farm.id} />
      })
    }
    </div>
  )
}

export default FarmList;
