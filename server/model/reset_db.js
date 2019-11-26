const pool = require('./db.js');
const queryStr = require('./queries.js');

// create array of DROP SQL commands to execute
const queryStrArray = [queryStr.dropDirectorsTable, queryStr.dropActorsTable, queryStr.dropWatchlistsTable, queryStr.dropAuditionsTable, queryStr.dropNotesTable];



// DROP tableS
async function resetDb () {
  console.log('resetting psql database...');
  await pool.connect()
    .then(async (client) => {
      Promise.all(queryStrArray.map((item) => {
        return client.query(item)
          .then(() => console.log('Ran this', item))
          .catch(err => console.log('Error :', err));
      }))
        .then(() => client.release());
    })
    .catch(err => console.log('error connecting', err));
}

resetDb();