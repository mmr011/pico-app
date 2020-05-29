import React, { useState } from 'react';
import FarmList from './FarmList.js';
import finder from '../Util/finder.js'

const AreaPicker = ({farms, setFarms}) => {
    const style = {
      transition: 'height easi-in'
    };

    const metro = () => {
      finder('test')
        .then(response => {
          setFarms(response);
        });
    };

    const original = () => {
      finder()
        .then(response => {
          setFarms(response); })
    }
  return (
    <div style={style}>
    <p>Escoja para encontrar la finca que hace entrega de sus
     cosechas entre las áreas de Puerto Rico.</p>
        <span onClick={metro}>Metro</span>
        <span onClick={original}>Norte</span>
        <span>Sur</span>
        <span>Este</span>
        <span>Oeste</span>
        <span>Centro</span>
      <FarmList farms={farms}/>
    </div>
  );
};

export default AreaPicker;
