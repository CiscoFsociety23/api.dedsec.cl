import { createPool } from 'mysql2'
import { promisify } from 'util'
import { db_dedsec } from './keys.js'

const pool = createPool(db_dedsec);
pool.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.log('DB connection was closed')
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.log('DB has too many connections')
        }
        if (err.code === 'ECONNREFUSED') {
            console.log('DB connection was refused')
        }
    }
    if (connection) connection.release()
    console.log('DB is on-line')
    return
})

pool.query = promisify(pool.query)

export default pool