import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './containers/Dogs/components/List';

class App extends Component {
  render() {
    return (
      <div className="App">
        <List />
      </div>
    );
  }
}

export default App;
