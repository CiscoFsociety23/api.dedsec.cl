import dotenv from 'dotenv'
dotenv.config()

export const db_dedsec = {
    host: process.env.HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
}