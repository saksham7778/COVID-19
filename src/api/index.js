import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

// to get info on cards
export const fetchData = async (country) => {

  let changeableUrl = url;

  if (country) {
    changeableUrl = `${url}/countries/${country}`;
  }

  try {
        // selected only data part from api call
        const { data:{confirmed,recovered,deaths,lastUpdate}} = await axios.get(changeableUrl);
        
        const useful_data = {
            recovered:recovered,
            confirmed:confirmed,
            deaths:deaths,
            lastUpdate:lastUpdate,
        }
        return useful_data;
    } catch (error) {
        console.log(error);
    }
}

// for displaying charts
export const fetchDailyData = async () => {
    try {
      const { data } = await axios.get(`${url}/daily`);
      // console.log({data});

      // here in the map actually the value to datais given to dailydata from where it is going to confirmed , deaths, date
      const modified_data= data.map((dailyData) => ({
          confirmed:  dailyData.confirmed.total,
          deaths:  dailyData.deaths.total,
          date:  dailyData.reportDate,
      }));

    //   console.log(modified_data);
      return modified_data;

    } catch (error) {
      return error;
    }
  };


  //for getting countries lists
  export const fetchCountries = async () => {
    try {
      const { data: { countries } } = await axios.get(`${url}/countries`);
      
      const countries_list = countries.map((country) => country.name);
      // console.log(countries_list);
      return countries_list;
    } catch (error) {
      return error;
    }
  };