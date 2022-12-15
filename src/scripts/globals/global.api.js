import CONFIG from './global.config';

const ENDPOINT_API = {
  LIST: `${CONFIG.BASE_URL}/list`,
  DETAIL: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
  REVIEW: `${CONFIG.BASE_URL}/review`,
};

export default ENDPOINT_API;
