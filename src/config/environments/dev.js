import dotenv from 'dotenv';
dotenv.config();

// export const serviceURL = `${SERVICE_BASE_URL}/path/to/service`;

const DEV_CONFIG = {
  PORT: process.env.PORT,
  SERVICE_URL: process.env.SERVICE_URL,
  DB: {
    
  }
}

export default DEV_CONFIG;