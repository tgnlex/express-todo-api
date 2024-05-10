import sqlite3 from 'sqlite3';

const db = new Database('./dev.db');

console.log('connecting to db')
db.connect();

console.log('closing db connection...')
db.close()