import dotenv from 'dotenv'
dotenv.config()

export const db_dedsec = {
    host: process.env.HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
}