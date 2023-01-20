import pkg from 'pg'
import dotenv from 'dotenv'

dotenv.config()

const { Pool } = pkg
const conn = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'Projeto_Final_DB',
    password: '@Database09',
    port: 5432
})

export default conn;