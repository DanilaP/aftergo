import $api from '../Components/Axios';

const API_URL = 'https://aftergo-api-dev.azurewebsites.net/api';
export const getAllTombstonesInfo = () => {
    return $api.get(`${API_URL}/tombstones`);
}

export const getAllTLegacyRooms = () => {
    return $api.get(`${API_URL}/legacyrooms`);
}

export const getAllSubscriptionsPlans = () => {
    return $api.get(`${API_URL}/shop/subscription-plans`);
}