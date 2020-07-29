const Pool = require('pg').Pool
const pool = new Pool({
    user: process.env.USER,
    host: process.env.HOST,
    database: process.DATABASE,
    password: process.env.PASSWORD,
    port: 5432,
    ssl: true,
});

const getData = () => {
    return new Promise(function(resolve, reject) {
        pool.query('SELECT * FROM entries', (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(results);
        })
    }) 
}

module.exports = {
    getData,
}