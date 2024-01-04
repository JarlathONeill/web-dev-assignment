const sql = require('mysql');

const dotenv = require('dotenv').config();

const db = sql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE, 
    port: process.env.DATABASE_PORT
});

/*db.connect((err) => {
    if (err) {
        console.log(err.message);
    }
    console.log('db ' + RTCPeerConnection.state);

})*/

module.exports = db;