import React, { useState } from 'react';
import FarmList from './FarmList.js';
import finder from '../Util/finder.js';

const AreaPicker = ({farms, setFarms}) => {
    const style = {
      transition: 'height easi-in'
    };

    const metro = () => {
      finder('Metro').then(response => setFarms(response.farms));
    };

    const original = () => {
      finder().then(response => setFarms(response.farms));
    };

  return (
    <div style={style}>
    <p>Escoja para encontrar la finca que hace entrega de sus
     cosechas entre las áreas de Puerto Rico.</p>
        <span onClick={() => finder().then(response => setFarms(response.farms))}>Todo Puerto Rico</span>
        <span onClick={() => finder('metro').then(response => setFarms(response.farms))}>Metro</span>
        <span onClick={() => finder('norte').then(response => setFarms(response.farms))}>Norte</span>
        <span onClick={() => finder('sur').then(response => setFarms(response.farms))}>Sur</span>
        <span onClick={() => finder('este').then(response => setFarms(response.farms))}>Este</span>
        <span onClick={() => finder('oeste').then(response => setFarms(response.farms))}>Oeste</span>
        <span onClick={() => finder('centro').then(response => setFarms(response.farms))}>Centro</span>
      <FarmList farms={farms}/>
    </div>
  );
};

export default AreaPicker;
