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
            "Access-Control-Allow-Origin": "http://localhost:1234/",
        },
    };

    try {
        const res = await axios.post(link_api, data, headers);
        console.log(res.data)
        return res;
    } catch (error) {
        console.log(error.response);
    }
    return null;
};