const pool = require('./db.js');
const queryStr = require('./queries.js');

// create array of DROP SQL commands to execute
const queryStrArray = [queryStr.dropDirectorsTable, queryStr.dropActorsTable, queryStr.dropWatchlistsTable, queryStr.dropAuditionsTable, queryStr.dropNotesTable];

// DROP tables
async function resetDb () {
  console.log('resetting psql database...');
  // connect to pool
  await pool.connect()
    .then(async (client) => {
      // create a promise all to handle each of our queries to the client
      Promise.all(queryStrArray.map((item) => {
        // return an array of promises to be fulfilled
        return client.query(item)
          .then(() => console.log('Ran:', item))
          .catch(err => console.log('Error:', err));
      }))
        // resolves the Promise all object
        .then(() => client.release());
    })
    .catch(err => console.log('error connecting', err));
}

resetDb();