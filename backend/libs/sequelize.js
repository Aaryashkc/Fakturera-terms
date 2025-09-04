import { Sequelize } from "sequelize";
import dotenv from "dotenv";
import dns from 'node:dns';

dotenv.config();

dns.setDefaultResultOrder('ipv4first');

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