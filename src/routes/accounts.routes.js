import express from 'express'
const router = express.Router()

import AccountService from '../services/accounts.service.js'
const Account_Service = new AccountService()

import { VerifyObject, VerifyId, VerifyEmail } from '../middlewares/accounts.mid.js'

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

router.patch('/update', VerifyId, VerifyObject, async (req, res) => {
    try {
        const id = req.query.id
        const account = req.body
        const UpdateAccount = await Account_Service.UpdateAccount(id, account)
        res.json(UpdateAccount)
    } catch (error) {
        console.log(error)
        res.json({ mensaje: 'Ha occurrido un error.' })
    }
})

router.delete('/delete', VerifyId, async (req, res) => {
    try {
        const id = req.query.id
        const DeleteAccount = await Account_Service.DeleteAccount(id)
        res.json(DeleteAccount)
    } catch (error) {
        console.log(error)
        res.json({ mensaje: 'Ha occurrido un error.' })
    }
})

router.get('/get-by-id', VerifyId, async (req, res) => {
    try {
        const id = req.query.id
        const GetAccountById = await Account_Service.GetAccountById(id)
        GetAccountById.length === 0 ? res.json({ mensaje: 'No hay cuenta creada con ese id' }) : res.json(GetAccountById)
    } catch (error) {
        console.log(error)
        res.json({ mensaje: 'Ha occurrido un error.' })
    }
})

router.get('/get-by-email', VerifyEmail, async (req, res) => {
    try {
        const email = req.query.email
        const GetAccountByEmail = await Account_Service.GetAccountByEmail(email)
        GetAccountByEmail.length === 0 ? res.json({ mensaje: 'No hay cuenta creada con ese email' }) : res.json(GetAccountByEmail)
    } catch (error) {
        console.log(error)
        res.json({ mensaje: 'Ha occurrido un error.' })
    }
})

export default router