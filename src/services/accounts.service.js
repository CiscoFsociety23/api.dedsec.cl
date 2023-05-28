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

}

export default AccountService