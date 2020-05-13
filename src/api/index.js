import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';


export const fetchData = async () => {

    try {
        // selected only data part from api call
        const response = await axios.get(url);

        return response;
    } catch (error) {
        
    }
}