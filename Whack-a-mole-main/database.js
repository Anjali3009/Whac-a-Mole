import mysql from 'mysql2'

import dotenv from 'dotenv'
dotenv.config()

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Mysql@2023',
    database: 'test'
}).promise()

export async function getNotes(){
    const rows = await pool.query("SELECT * FROM USER")
    return rows
}

export async function getNote(Email){
    const [rows] = await pool.query(`
    SELECT * 
    FROM user 
    where Email=?
    `, [Email])
    return rows[0]
}

export async function createNote(Name, Email){
    const res = await pool.query(`
    insert into user(Name, Email)
    values (?, ?)
    `, [Name, Email])
    return res
}

export async function updateNote(high_score, Email){
    const up = await pool.query(`
    UPDATE user SET high_score(?)
    WHERE Email=?
    `, [high_score, Email])
}
/*const note = await getNote('amita231@gmail.com')
console.log(note)*/

/*const res = await createNote('Pritam', 'pritamnarayan123@gmail.com')
console.log(res)*/

const up = await updateNote(35, 'pritamnarayan123@gmail.com')
aonsole.log(up)

const notes = await getNotes()
console.log(notes)