import axios from 'axios';

import { API_URL } from '../store/constants';

const Api = axios.create({
  baseURL: API_URL,
  responseType: 'json',
  withCredentials: false,
});

// export const POST_FORM_PATH = `${API_URL}/api/send`;

export default Api;
