import React, { Component } from 'react';

import './App.css';
import Title from './components/title';
import QuoteList from './components/quote_list';


class App extends Component {
  render() {
    return (
      <div className="App ui grid center aligned container">
          <Title/>
          <QuoteList />
      </div>
    );
  }
}

export default App;
