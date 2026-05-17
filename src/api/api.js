import axios from 'axios';

const API_BASE_URL = '/api/cloud';

export const getSummary = () => axios.get(`${API_BASE_URL}/summary`);
export const getServices = () => axios.get(`${API_BASE_URL}/services`);
export const getRecommendations = () => axios.get(`${API_BASE_URL}/recommendations`);
export const getAlerts = () => axios.get(`${API_BASE_URL}/alerts`);
export const getAnomalies = () => axios.get(`${API_BASE_URL}/anomalies`);
