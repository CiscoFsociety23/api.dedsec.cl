import database from '../database.js'

class AccountService {

    async GetAccounts(){
        const GetAccounts = await database.query(`SELECT id, name, email FROM dedsec.accounts;`)
        return GetAccounts
    }

}

export default AccountService