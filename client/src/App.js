import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: ""
    }
  }

  getResponseOnMount () {
    return fetch('http://localhost:3001')
      .then(response => response.json());
  }

  componentDidMount() {
    this.getResponseOnMount()
      .then(response => this.setState({
        test: response.message
      }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
          Test
          </p>
          <p>{this.state.test}</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
