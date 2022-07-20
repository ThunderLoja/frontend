import axios from 'axios';
import { api_links, headers } from "./endpoint";

/**
 * @brief Post data to server.
 *
 * @param endpoint_name Title to the data location in the API.
 * @param data data to send.
 *
 * @returns Data received from server.
 */

export const ApiPost = async (endpoint_name, data) => {
    const link_api = api_links.BACKEND + '/' + endpoint_name;

    try {
        await axios.post(link_api, data, headers).then(response => { 
            console.log(response.data);
            return response 
        });
    } catch (error) {
        console.log("respota erro: \n")
        console.log(error.response);
    }
    return null;
};