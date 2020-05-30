import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';

const Farm = ({ farm }) => {
  const [fade, setFade] = useState(false)
  useEffect(() => {
    setFade(true);
    return () => {
      setFade(false);
    }
  }, [farm])

  return (
    <Fade when={fade} delay={550} mountOnEnter={true} umountOnExit={true} >
      <div className='farm'>
        <h3>{farm.name}</h3>
        <h6>Entregas a: {farm.area_of_delivery.join(', ')}</h6>
        <h6>Productos: {farm.product_type.join(', ')}</h6>
        <h6>Contactos: {farm.contact_info.join(', ')}</h6>
      </div>
    </Fade>
  )
};

export default Farm;
