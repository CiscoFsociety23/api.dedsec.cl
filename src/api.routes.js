import express from 'express'

function api_router(app){
    const router = express.Router()
    app.use('/api/v1', router)
}

export default api_router