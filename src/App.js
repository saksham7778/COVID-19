import React from 'react';
// import logo from './logo.svg';
import './App.css';

import Cards from './components/Cards/Cards'
import Chart from './components/Chart/Chart'
import Countrypicker from './components/CountryPicker/CountryPicker'

class App extends React.Component {
  render(){
    return (
      <div>
        <h1>App</h1>
        <Cards />
        <Chart />
        <Countrypicker />
      </div>
    );
  }
}

export default App;
