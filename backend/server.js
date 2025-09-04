import dotenv from 'dotenv'
dotenv.config() 
import express from 'express'
import cors from 'cors'
import { sequelize } from './libs/sequelize.js'
import termRoutes from './routes/term.route.js'

const app = express()
const port = process.env.PORT
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({
    origin: ["http://localhost:5173"],
    credentials: true, 
}
))

// Mount API routes
app.use('/api/terms', termRoutes)

async function serverstart() {
  try {
    await sequelize.authenticate();
    console.log('Connected to Supabase Postgres');

    await sequelize.sync(); 

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (err) {
    console.error(' Startup failed:', err);
    process.exit(1);
  }
}

// call it
serverstart();