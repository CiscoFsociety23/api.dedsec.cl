import express from "express";
const router = express.Router()

import EmailService from "../services/emailservice.service.js"
const email_service = new EmailService()

import { CheckData } from "../middlewares/emailservice.mid.js";

router.post('/', CheckData, (req, res) => {
    const data = req.body
    const send_mail = email_service.SendMail(data)
    res.json({
        title: 'Recibido',
        text: 'Contacto enviado exitosamente. nos comunicaremos en breves',
        icon: 'success',
    })
})

export default router