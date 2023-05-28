import express from 'express'
import accounts from './routes/accounts.routes.js'

function api_router(app){
    const router = express.Router()
    app.use('/api/v1', router)

    router.use('/accounts', accounts)
}

export default api_router