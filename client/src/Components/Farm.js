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
    <Fade cascade when={fade} mountOnEnter={true} umountOnExit={true} >
      <div className='farm'>
        <h3>{farm.name}</h3>
        <h6>Entregas a: {farm.areaOfDelivery.join(', ')}</h6>
        <h6>Productos: {farm.productType.join(', ')}</h6>
        <h6>Contactos: {farm.contacts.join(', ')}</h6>
      </div>
    </Fade>
  )
};

export default Farm;
