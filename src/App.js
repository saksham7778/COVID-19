import React from 'react';
// import logo from './logo.svg';
import styles from './App.module.css';

import Cards from './components/Cards/Cards'
import Chart from './components/Chart/Chart'
import Countrypicker from './components/CountryPicker/CountryPicker'
import {fetchData} from './api'
import image from './images/covid-19.png';

class App extends React.Component {


  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data:fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    // console.log(fetchedData);
    // console.log(country);
    this.setState({ data:fetchedData,country: country  });
  }


  render(){

    const {data,country} = this.state;

    return (
      <div className={styles.container}>
        <img className={styles.image} src={image} alt="COVID-19" />
        <Cards api_response={data}/>
        
        <Countrypicker handleCountryChange={this.handleCountryChange}/>

        <Chart  data={data} country={country} />
      </div>
    );
  }
}

export default App;
