import axios from 'axios';
import { api_links } from "./endpoint";

export const ApiPut = async (endpoint_name, data) => {
    const link_api = api_links.BACKEND + '/' + endpoint_name;

    const headers = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    };

    try {
        await axios.put(link_api, data, headers).then(response => { 
            console.log("respota certo: \n")
            console.log(response.data);
            return response 
        });
    } catch (error) {
        console.log(error.response);
    }
    return null;
};