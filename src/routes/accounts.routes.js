import express from 'express'
const router = express.Router()

import AccountService from '../services/accounts.service.js'
const Account_Service = new AccountService()

import { VerifyObject } from '../middlewares/accounts.mid.js'

router.get('/', async (req, res) => {
    try {
        const accounts = await Account_Service.GetAccounts()
        if (accounts.length === 0){
            res.json({ mensaje: 'No hay cuentas creadas.' })
        } else {
            res.json(accounts)
        }
    } catch (error) {
        console.log(error)
        res.json({ mensaje: 'Ha occurrido un error.' })
    }
})

router.post('/create', VerifyObject, async (req, res) => {
    try {
        const account = req.body
        const CreateAccount = await Account_Service.CreateAccount(account)
        res.json(CreateAccount)
    } catch (error) {
        console.log(error)
        res.json({ mensaje: 'Ha occurrido un error.' })
    }
})

export default router