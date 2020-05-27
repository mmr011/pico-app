import React, { useState, useEffect } from 'react';
import '../Styles/App.css';
import AreaPicker from './AreaPicker';
import finder from '../Util/finder';

const App = () =>  {
  const [farms, setFarms] = useState([]);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    finder()
      .then(response => {
        console.log(response);
        setFarms(response)
      });
  }, []);

  const isHiding = () => {
    if(hide === true) {
      console.log('not hiding');
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
        <button onClick={getOriginalResponse}>Contacto</button>
        <button onClick={() => setHide(true)}>Informació</button>
        {isHiding()}
      </header>
      <h1 id='title'>Pico <span>y</span> Pala</h1>
      <div className='container'>
        <AreaPicker
          setFarms={setFarms}
          farms={farms}/>
      </div>
    </div>
  );
};

export default App;
