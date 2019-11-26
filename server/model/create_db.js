const pool = require('./db.js');
const queryStr = require('./queries.js'); 

const queryStrArray = [queryStr.createActorsTable, queryStr.createDirectorsTable, queryStr.createAuditionsTable, queryStr.createNotesTable, queryStr.createWatchlistsTable];

// create table if it doesn't exist
async function createDb () {
  console.log('creating psql database...');
  await pool.connect()
    .then(async (client) => {
      Promise.all(queryStrArray.map((item) => {
        return client.query(item)
          .then(() => console.log('Ran:', item))
          .catch(err => console.log('Error:', err));
      }))
        .then(() => client.release());
    })
    .catch(err => console.log('error connecting', err));
}

createDb();