const pool = require('./db.js');
const queryStr = require('./queries.js');

// DROP table
async function resetDb () {
  console.log('restting psql database...');
  await pool.connect()
    .then(async (client) => {
      await client.query(queryStr.dropTables).then(() => {
        console.log('tables dropped');
        client.release();
      });
    });
}

resetDb();