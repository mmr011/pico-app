import React from 'react';
import './Styles/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: ""
    }

    this.getResponse = this.getResponse.bind(this);
    this.getNewResponse = this.getNewResponse.bind(this);
  }

  getResponse () {
    return fetch('http://localhost:3001')
      .then(response => response.json())
      .then(jsonResponse => {
        this.setState({
          test: jsonResponse.message
        });
      });
  }

  getNewResponse() {
    return fetch('http://localhost:3001/test')
      .then(response => response.json())
      .then(jsonResponse => {
        this.setState({
          test: jsonResponse.message
        })
      });
  }

  render() {
    return (
        <div className="App">
          <header className='header'>
            <button>Infción</button>
            <button>Contacto</button>
          </header>
          <h1 id='title'>Pico <span>y</span> Pala</h1>
          <div className='container'>
            <p>Escoja para encontrar la finca que hace entrega de sus
            cosechas entre las áreas de Puerto Rico.</p>
            <a>Área Metro</a>
            <a>Área Norte</a>
            <a>Área Sur</a>
            <a>Área Este</a>
            <a>Área Oeste</a>
          </div>
        </div>
    );
  }
}

export default App;
