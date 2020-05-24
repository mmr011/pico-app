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
        <p>
          Test
        </p>
        <button onClick={this.getResponse}>Test Button 1</button>
        <button onClick={this.getNewResponse}>Test Button2</button>
        <p>{this.state.test}</p>
      </div>
    );
  }
}

export default App;
