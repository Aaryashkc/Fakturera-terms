import { Sequelize } from 'sequelize';
import { setDefaultResultOrder } from 'node:dns';

try {
	setDefaultResultOrder('ipv4first');
} catch (_) {}

const isProduction = process.env.NODE_ENV === 'production';

const databaseUrl = process.env.DATABASE_URL;

const sequelize = isProduction && databaseUrl
	? new Sequelize(databaseUrl, {
		dialect: 'postgres',
		logging: false,
		dialectOptions: {
			ssl: {
				require: true,
				rejectUnauthorized: false
			},
			keepAlive: true
		},
		pool: {
			max: parseInt(process.env.DB_POOL_MAX || '10', 10),
			min: parseInt(process.env.DB_POOL_MIN || '0', 10),
			acquire: parseInt(process.env.DB_POOL_ACQUIRE_MS || '20000', 10),
			idle: parseInt(process.env.DB_POOL_IDLE_MS || '10000', 10),
			evict: parseInt(process.env.DB_POOL_EVICT_MS || '1000', 10)
		},
		retry: {
			max: 3
		}
	})
	: new Sequelize(
		process.env.DB_NAME || 'postgres',
		process.env.DB_USER || 'postgres',
		process.env.DB_PASSWORD || 'postgres',
		{
			host: process.env.DB_HOST || '127.0.0.1',
			port: parseInt(process.env.DB_PORT || '5432', 10),
			dialect: 'postgres',
			logging: console.log,
			pool: {
				max: 5,
				min: 0,
				acquire: 20000,
				idle: 10000
			}
		}
	);

export { sequelize };