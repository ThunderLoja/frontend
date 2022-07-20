import axios from 'axios';
import { api_links } from "./endpoint";

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
    console.log(link_api)

    let headers = {
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json',
        },
    };

    try {
        await axios.post(link_api, data, headers).then(response => { 
            console.log("respota certo: \n")
            console.log(response.data);
            return response 
        });
    } catch (error) {
        console.log("respota erro: \n")
        console.log(error.response);
    }
    return null;
};

// header := w.Header()
// header.Add("Access-Control-Allow-Origin", "*")
// header.Add("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS")
// header.Add("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With")