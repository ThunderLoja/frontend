import axios from 'axios';
 

/**
 * @brief Post data to server.
 *
 * @param endpoint_name Title to the data location in the API.
 * @param data data to send.
 *
 * @returns Data received from server.
 */

export const ApiPost = async (endpoint_name, data) => {
    const api = process.env.API_ENDPOINT
    const link = api + '/' + endpoint_name;

    let headers = {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    };

    try {
        const res = await axios.post(link, data, headers);
        return res;
    } catch (error) {
        console.log(error.response);
    }
    return null;
};