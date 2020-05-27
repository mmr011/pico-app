import React from 'react';

const Farm = props => {

  return (
    <div className='farm'>
      <h3>{props.farm.name}</h3>
      <h6>Entregas a: {props.farm.areaOfDelivery.join(', ')}</h6>
      <h6>Productos: {props.farm.productType.join(', ')}</h6>
      <h6>Contactos: {props.farm.contacts.join(', ')}</h6>
    </div>
  )
};

export default Farm;
