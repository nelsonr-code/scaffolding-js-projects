import axios from 'axios';
import currentEnv from '../environments/index.js';

export const webApi = axios.create({
	// baseURL: import.meta.env.ENDPOINT_TEST,
	baseURL: currentEnv.SERVICE_URL,
	headers: {
		'Content-Type': 'application/json',
	},
});
