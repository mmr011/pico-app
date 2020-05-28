import React, { useState, useEffect } from 'react';
import '../Styles/App.css';
import AreaPicker from './AreaPicker';
import Contacts from './Contacts';
import Info from './Info';
import finder from '../Util/finder';

const App = () =>  {
  const [farms, setFarms] = useState([]);
  const [toggleInfo, setInfo] = useState(false);
  const [toggleContact, setContact] = useState(false);

  useEffect(() => {
    finder()
      .then(response => {
        console.log(response);
        setFarms(response)
      })
    return () => {
      console.log('unmount');
    };
  }, []);

  const isHiding = () => {
    if(toggleContact) {
      console.log('shown');
      return (
        <Info />
      );
    }
  }

  const getNewResponse = () => {
    finder('test')
      .then(response => {
        setFarms(response)
      });
  };

  const getOriginalResponse = () => {
    finder()
      .then(response => {
        setFarms(response);
      });
  };

  return (
    <div className="App">
      <header className='header'>
        <button onClick={() => setInfo(!toggleInfo)}>¿Qué es Pico y Pala?</button>
        {isHiding()}
      </header>
      <h1 id='title'>Pico <span>y</span> Pala</h1>
      <div className='container'>
        <AreaPicker
          setFarms={setFarms}
          farms={farms}/>
      </div>
      <footer>
        <span onClick={() => setContact(!toggleContact)}>Martín Molina</span>
      </footer>
    </div>
  );
};

export default App;
