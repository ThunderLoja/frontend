import axios from 'axios';
import { api_links, headers } from "./endpoint";

/**
 * @brief Get data from server.
 *
 * @param endpoint_name Title to the data location in the API.
 * @param data data to send.
 *
 * @returns Data received from server.
 */

export const ApiGet = async (endpoint_name) => {
    const link = api_links.BACKEND + '/' + endpoint_name;

    try {
        await axios.get(link,headers).then(response => { 
            console.log(response.data);
            return response 
        });
    } catch (error) {
        console.log(error.response);
    }
    return null;
};