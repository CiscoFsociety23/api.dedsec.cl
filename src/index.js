// Node Modules for the Server
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import dotenv from 'dotenv'
dotenv.config()

// import de la API's
import API_v1 from './api.routes.js'

// Initialization
const app = express()

// Settings
const port = process.env.SERVER_PORT

// Middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(express.json())

// API's
API_v1(app)

// Starting the Server
app.listen(port, () => {
    console.log(`Server on Port: ${port}`)
})