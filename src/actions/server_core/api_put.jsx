import axios from 'axios';
import { api_links } from "./endpoint";

export const ApiPut = async (endpoint_name, data) => {
    const link_api = api_links.BACKEND + '/' + endpoint_name;

    let headers = {

        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json',
            // "Access-Control-Allow-Origin": "http://localhost:1234/",
        },
    };

    try {
        const res = await axios.put(link_api, data, headers);
        console.log(res.data)
        return res;
    } catch (error) {
        console.log(error.response);
    }
    return null;
};