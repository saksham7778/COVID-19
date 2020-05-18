import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

// to get info on cards
export const fetchData = async () => {

    try {
        // selected only data part from api call
        const { data:{confirmed,recovered,deaths,lastUpdate}} = await axios.get(url);
        
        const useful_data = {
            recovered:recovered,
            confirmed:confirmed,
            deaths:deaths,
            lastUpdate:lastUpdate,
        }
        return useful_data;
    } catch (error) {
        
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
          deaths:  dailyData.confirmed.total,
          date:  dailyData.reportDate,
      }));

    //   console.log(modified_data);
      return modified_data;

    } catch (error) {
      return error;
    }
  };