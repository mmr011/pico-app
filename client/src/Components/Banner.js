import React from 'react';
import Contacts from './Contacts';
import Info from './Info';

const Banner = props => {
  const renderContacts = () => {
    if(props.hide === true) {
      return console.log('Contacts');
    };
  };

  const renderInfo = () => {
    if(props.hide === true) {
      return console.log('Info');
    };
  };

  return (
    <header className="header">
      <button onClick={props.setHide(true)}>Contacto</button>
      <button onClick={props.setHide(true)}>Informació</button>
    </header>
  );
};

export default Banner;
