import React, { Component } from 'react';
import './App.css';
import Search from './components/Search'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Learning Some Redux </h1>
        <Search />
        <img src="https://cdn.pixabay.com/photo/2017/01/25/08/11/unicorn-2007266_960_720.png" aly ="Image of a unicorn."/>

      </div>
    );
  }
}

export default App;
