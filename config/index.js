import dotenv from 'dotenv'
dotenv.config()
export const {APP_PORT, DEBUG_MODE, MONGO_DB, JWT_SECRET}= process.env