const Pool = require('pg').Pool
const pool = new Pool({
    user: 'leat@leat',
    host: 'leat.postgres.database.azure.com',
    database: 'leat',
    password: 'MSFT2020!',
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