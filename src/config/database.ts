import { createConnection, ConnectionOptions } from 'typeorm';
import { join } from 'path';

import secrets from '../util/secrets';
const parentDir = join(__dirname, '..');

export const connectToDatabase = (entitiesPath: string = null) => {
  const path = entitiesPath || parentDir;
  const connectionOptions: ConnectionOptions = {
    type: 'mysql',
    host: secrets.DB_HOST,
    port: Number(secrets.DB_PORT),
    username: secrets.DB_USERNAME,
    password: secrets.DB_PASSWORD,
    database: secrets.DB_DATABASE,
    entities: [
      `${path}/entity/*{.ts,.js}`,
    ],
    synchronize: true,
    logging: secrets.DB_LOGGING,
    dropSchema: secrets.DROP_SCHEMA,
  };

  return createConnection(connectionOptions);
};
