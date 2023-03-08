import CONFIG from './config';

const API_ENDPOINT = {
  Home: `${CONFIG.BASE_URL}list`,
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
  AddReview: `${CONFIG.BASE_URL}review`,
};

export default API_ENDPOINT;
