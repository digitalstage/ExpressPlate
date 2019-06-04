import DBConfigType from '../../types/dbConfig';

export default {
  development: {
    username: 'user',
    password: 'password',
    database: 'database',
    host: 'mysql',
    port: 3306,
    dialect: 'mysql',
    timezone: '+09:00'
  },
  test: {
    username: 'user',
    password: 'password',
    database: 'database',
    host: 'testdb',
    dialect: 'mysql',
    timezone: '+09:00'
  },
  production: {
    username: 'user',
    password: 'password',
    database: 'database',
    host: 'productiondb',
    dialect: 'mysql',
    timezone: '+09:00'
  }
} as {
  [env: string]: DBConfigType;
};
