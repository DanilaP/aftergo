import axios from "axios";

const API_URL = 'https://aftergo-api-dev.azurewebsites.net/api/';

export const getAllTombstonesInfo = () => {
    return axios.get(`${API_URL}/tombstones`);
}