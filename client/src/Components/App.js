import React, { useState, useEffect } from 'react';
import '../Styles/App.css';
import AreaPicker from './AreaPicker'

const App = () =>  {
  const [farms, setFarms] = useState({
    test: ""
  });

  const getData = async (route) => {
    let response;
    if(route === undefined) {
      response = await fetch(`http://localhost:3001/`);
    } else {
      response = await fetch(`http://localhost:3001/${route}`);
    };
    const body = await response.json();
    return body;
  }

  const fetchOnMount = async () => {
    const response = await fetch('http://localhost:3001/');
    const body = await response.json();
    return body;
  }

  useEffect(() => {
    fetchOnMount()
      .then(response => {
        console.log(response.message);
        setFarms({
          test: response.message
        });
      });
  }, []);

  const getNewResponse = async () => {
    getData('test')
      .then(response => {
        setFarms({
          test: response.message
        })
      });
  };

  const getOriginalResponse = async () => {
    getData()
      .then(response => {
        setFarms({
          test: response.message
        });
      });
  };

  return (
    <div className="App">
      <header className='header'>
        <button onClick={getOriginalResponse}>Contacto</button>
        <button onClick={getNewResponse}>Informació</button>
      </header>
      <h1 id='title'>Pico <span>y</span> Pala</h1>
      <p>{farms.test}</p>
      <div className='container'>
        <AreaPicker farms={farms}/>
      </div>
    </div>
  );
}

export default App;
