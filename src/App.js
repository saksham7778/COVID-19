import React from 'react';
// import logo from './logo.svg';
import styles from './App.module.css';

import Cards from './components/Cards/Cards'
import Chart from './components/Chart/Chart'
import Countrypicker from './components/CountryPicker/CountryPicker'
import {fetchData} from './api'

class App extends React.Component {


  state = {
    data: {},
  }

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data:fetchedData });
    // console.log(fetchedData);
  }


  render(){

    const api_response = this.state.data;

    return (
      <div className={styles.container}>
        <Cards api_response={api_response}/>
        <Chart />
        <Countrypicker />
      </div>
    );
  }
}

export default App;
