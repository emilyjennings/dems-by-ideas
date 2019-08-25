import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import $ from 'jquery'

import './App.css';

import Home from './containers/Home'

import cheerio from 'cheerio'

class App extends Component {



  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }


}

export default App;
