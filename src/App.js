import React from 'react';
// import logo from './logo.svg';
import styles from './App.module.css';

import Cards from './components/Cards/Cards'
import Chart from './components/Chart/Chart'
import Countrypicker from './components/CountryPicker/CountryPicker'
import {fetchData} from './api'

class App extends React.Component {

  async componentDidMount() {
    const data = await fetchData();
    console.log(data);
  }


  render(){
    return (
      <div className={styles.container}>
      
        <Cards />
        <Chart />
        <Countrypicker />
      </div>
    );
  }
}

export default App;
