import React from 'react';
import Farm from './Farm';

const FarmList = props => {
  return (
    <div>
    {
      props.farms.map(farm => {
        return <Farm farm={farm} key={farm.key} />
      })
    }
    </div>
  )
}

export default FarmList;
