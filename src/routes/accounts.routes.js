import express from 'express'
const router = express.Router()

import AccountService from '../services/accounts.service.js'
const Account_Service = new AccountService()

import { VerifyObject, VerifyId } from '../middlewares/accounts.mid.js'

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

router.patch('/update/:id', VerifyId, VerifyObject, async (req, res) => {
    try {
        const  { id } = req.params
        const account = req.body
        const UpdateAccount = await Account_Service.UpdateAccount(id, account)
        res.json(UpdateAccount)
    } catch (error) {
        console.log(error)
        res.json({ mensaje: 'Ha occurrido un error.' })
    }
})

router.delete('/delete/:id', VerifyId, async (req, res) => {
    try {
        const { id } = req.params
        const DeleteAccount = await Account_Service.DeleteAccount(id)
        res.json(DeleteAccount)
    } catch (error) {
        console.log(error)
        res.json({ mensaje: 'Ha occurrido un error.' })
    }
})

router.get('/get-by-id/:id', VerifyId, async (req, res) => {
    try {
        const { id } = req.params
        const GetAccountById = await Account_Service.GetAccountById(id)
        if (GetAccountById.length === 0){
            res.json({ mensaje: 'No hay cuenta con ese id' })
        } else {
            res.json(GetAccountById)
        }
    } catch (error) {
        console.log(error)
        res.json({ mensaje: 'Ha occurrido un error.' })
    }
})

export default router