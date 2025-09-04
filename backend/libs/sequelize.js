import { Sequelize } from "sequelize";
import dotenv from "dotenv";
import dns from 'node:dns';
import pg from 'pg';

dotenv.config();

// Prefer IPv4 addresses to avoid IPv6 ENETUNREACH in some environments (e.g., Render)
try {
  dns.setDefaultResultOrder('ipv4first');
} catch {}

// Force pg to resolve DB host to IPv4
pg.defaults.lookup = (host, options, callback) => {
  return dns.lookup(host, { family: 4 }, callback);
};


const sequelize = new Sequelize(process.env.SUPABASE_DB_URL, {
  dialect: "postgres",
  protocol: "postgres",
  logging: false, 
  dialectOptions: {
    ssl: {
      require: true,      
      rejectUnauthorized: false, 
    },
  },
});

export { sequelize };