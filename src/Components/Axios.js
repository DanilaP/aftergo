import axios from "axios";
import store from "../store";

export const API_URL = 'http://aftergo-dev.eastus.azurecontainer.io:3000';


const $api = axios.create({ 
    baseURL: API_URL
})

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('userToken')}`;
    return config;
})
$api.interceptors.response.use( response => {
    return response;
}, function(error) {
    if (error.status === 401) {
        localStorage.removeItem("userToken");
        store.getState().route("/ChooseLandMenu");
    }
})
export default $api;
