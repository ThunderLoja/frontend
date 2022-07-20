import axios from 'axios';
 
/**
 * @brief Get data from server.
 *
 * @param endpoint_name Title to the data location in the API.
 * @param data data to send.
 *
 * @returns Data received from server.
 */

export const ApiGet = async (endpoint_name, data) => {
    const api = process.env.API_ENDPOINT
    const link = api + '/' + endpoint_name;

    let headers = {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    };

    try {
        axios.get(link,{
            params: {
                ...headers,
                ...data
            }
        }).then(response => { 
            console.log(response.data); 
        });
    } catch (error) {
        console.log(error.response);
    }
    return null;
};