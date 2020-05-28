import React, {useState, useEffect } from 'react';

const style = {
  opacity: 1,
  transition: "opacity 500ms ease-out"
}

const Farm = props => {
  const [fade, changeFade] = useState({
    opacity: 0,
    transition: "all 500ms ease-out"
  });

  useEffect(() => {
    changeFade({
      opacity: 1,
      transition: "all 500ms ease-out"
    });
    return () => {
      changeFade({
        opacity: 0,
        transition: "all 500ms ease-out"
      })
    }
  }, [props.farm.id]);

  return (
    <div style={fade} className='farm'>
      <h3>{props.farm.name}</h3>
      <h6>Entregas a: {props.farm.areaOfDelivery.join(', ')}</h6>
      <h6>Productos: {props.farm.productType.join(', ')}</h6>
      <h6>Contactos: {props.farm.contacts.join(', ')}</h6>
    </div>
  )
};

export default Farm;
