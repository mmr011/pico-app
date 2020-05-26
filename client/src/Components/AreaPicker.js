import React from 'react';
import FarmList from './FarmList.js';
import finder from '../Util/finder.js'

const AreaPicker = props => {
    // const [area, setArea] = useState('');

    const metro = () => {
      finder('test2')
        .then(response => {
          props.setFarms(response);
        });
    };

  return (
    <div>
    <p>Escoja para encontrar la finca que hace entrega de sus
     cosechas entre las áreas de Puerto Rico.</p>
        <li onClick={metro}>Metro</li>
        <li>Norte</li>
        <li>Sur</li>
        <li>Este</li>
        <li>Oeste</li>
        <li>Centro</li>
      <FarmList farms={props.farms}/>
    </div>
  );
};

export default AreaPicker;
