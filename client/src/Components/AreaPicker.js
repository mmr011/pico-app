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
        <a onClick={metro}>Metro</a>
        <a>Norte</a>
        <a>Sur</a>
        <a>Este</a>
        <a>Oeste</a>
        <a>Centro</a>
      <FarmList farms={props.farms}/>
    </div>
  );
};

export default AreaPicker;
