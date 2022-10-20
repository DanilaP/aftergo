import $api from '../Components/Axios';

const API_URL = 'https://aftergo-api-dev.azurewebsites.net/api';
export const getAllTombstonesInfo = async () => {
    return await $api.get(`${API_URL}/tombstones`);
}

export const getAllTLegacyRooms = async () => {
    return await $api.get(`${API_URL}/legacyrooms`);
}

export const getAllSubscriptionsPlans = async () => {
    return await $api.get(`${API_URL}/shop/subscription-plans`);
}