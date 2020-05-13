import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';


export const fetchData = async () => {

    try {
        // selected only data part from api call
        const { data:{confirmed,recovered,deaths,lastUpdate}} = await axios.get(url);
        
        const useful_data = {
            // when names are same then we can directly give the values but for simplicity i have done by providing values
            // confirmed,
            // recovered,
            // deaths,
            // lastUpdate,
            recovered:recovered,
            confirmed:confirmed,
            deaths:deaths,
            lastUpdate:lastUpdate,
        }
        return useful_data;
    } catch (error) {
        
    }
}