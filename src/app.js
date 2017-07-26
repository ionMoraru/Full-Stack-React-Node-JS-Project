import React, { Component } from 'react';
import { render } from 'react-dom';
import Home from './components/layout/Home';

class App extends Component {
  render() {
    return (
      <div>
        <Home />
      </div>
    )
  }
}

const root = document.getElementById('root');
render(<App />, root);
