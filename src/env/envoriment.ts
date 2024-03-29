import * as dotenv from 'dotenv';

dotenv.config();

export const environment = {
  DATABASE_URL: process.env.DATABASE_URL,
  APP_PORT: +process.env.APP_PORT,
  JWT_SECRET: process.env.JWT_SECRET,
};
