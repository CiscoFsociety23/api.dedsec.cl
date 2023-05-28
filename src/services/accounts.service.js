import buffer from 'nodejs-base64-converter'
import database from '../database.js'

class AccountService {

    async GetAccounts(){
        const GetAccounts = await database.query(`SELECT id, name, email FROM dedsec.accounts;`)
        return GetAccounts
    }

    async CreateAccount(account){
        const passwd = buffer.encode(account.passwd)
        const CreateAccount = await database.query(`INSERT INTO dedsec.accounts(name, email, passwd) VALUES('${account.name}', '${account.email}', '${passwd}');`)
        const AccountCreated = { mensaje: 'Cuenta creada con exito', cuenta: { id: CreateAccount.insertId, nombre: account.name, email: account.email } }
        return AccountCreated
    }

    async UpdateAccount(id, account){
        const passwd = buffer.encode(account.passwd)
        const UpdateAccount = await database.query(`UPDATE dedsec.accounts SET name='${account.name}', email='${account.email}', passwd='${passwd}' WHERE id=${id};`)
        if (UpdateAccount.affectedRows === 0){
            const AccountUpdated = { mensaje: `El cuenta ${id} no existe.` }
            return AccountUpdated
        } else {
            const AccountUpdated = { mensaje: 'Cuenta actualizada con exito', cuenta: { id: id, nombre: account.name, email: account.email } }
            return AccountUpdated
        }
    }

}

export default AccountService