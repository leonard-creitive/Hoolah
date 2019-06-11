import dotenv from 'dotenv';
import fs from 'fs';
import { LoggerOptions } from 'typeorm/logger/LoggerOptions';

if (process.env.NODE_ENV === 'test' && fs.existsSync('.env.test')) {
  console.log('Using .env.test file to supply config environment variables');
  dotenv.config({ path: '.env.test' });
} else if (fs.existsSync('.env')) {
  console.log('Using .env file to supply config environment variables');
  dotenv.config({ path: '.env' });
}

const secrets = {
  ENVIRONMENT: process.env.NODE_ENV,
  prod: process.env.NODE_ENV === 'production',
  PORT: Number(process.env.PORT) || 8080,

  DB_HOST: process.env.DB_HOST,
  DB_DATABASE: process.env.DB_DATABASE,
  DB_USERNAME: process.env.DB_USERNAME,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_PORT: process.env.DB_PORT || 3306,
  DB_LOGGING: process.env.DB_LOGGING as LoggerOptions || false,
  DROP_SCHEMA: process.env.NODE_ENV === 'test',
  API_KEY: process.env.API_KEY,
  MEDIA_URL: process.env.MEDIA_URL,
  APP_URL: process.env.APP_URL,
};

export default secrets;
