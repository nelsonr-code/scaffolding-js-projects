import dotenv from 'dotenv';
dotenv.config();
import DEV_CONFIG from './dev.js';

const { NODE_ENV } = process.env;
let currentEnv = DEV_CONFIG;

if (NODE_ENV === 'production') {
  currentEnv = null;
}

export default currentEnv;