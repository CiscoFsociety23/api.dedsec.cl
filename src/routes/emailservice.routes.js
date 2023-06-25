import express from "express";
const router = express.Router()

router.post('/', (req, res) => {
    res.json({mensaje: 'Works'})
})

export default router