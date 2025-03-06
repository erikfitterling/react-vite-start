const axios = require('axios');

const API_URL = 'http://localhost:5000/api/counters';

export const saveCounterData = async (name, experience) => {
  try {
    const response = await axios.post(API_URL, { name, experience });
    return response.data;
  } catch (error) {
    console.error('Error saving counter data:', error);
    throw error;
  }
};