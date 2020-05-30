import React from 'react';

const Farm = ({ farm }) => {
  return (
      <div className='farm'>
        <h3>{farm.name}</h3>
        <h6>Entregas a: {farm.area_of_delivery.join(', ')}</h6>
        <h6>Productos: {farm.product_type.join(', ')}</h6>
        <h6>Contactos: {farm.contact_info.join(', ')}</h6>
      </div>
  )
};

export default Farm;
