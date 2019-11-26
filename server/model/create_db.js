const pool = require('./db.js');
const queryStr = require('./queries.js'); 

// create table if it doesn't exist
async function createDbTables () {
  console.log('creating db tables (if they dont exist)');
  await pool.connect()
    .then(async (client) => {
      await client.query(queryStr.createDirectorsTable).then(() => {
        console.log('directors table exists');
      });
      await client.query(queryStr.createActorsTable).then(() => {
        console.log('actors table exists');
      });
      await client.query(queryStr.createWatchlistsTable).then(() => {
        console.log('watchlists table exists');
      });
      await client.query(queryStr.createAuditionsTable).then(() => {
        console.log('auditions table exists');
      });
      await client.query(queryStr.createNotesTable).then(() => {
        console.log('notes table exists');
        // client.release();
      })
        .then(() => client.release())
        .catch(err => console.log('error is:', err));
    })
    .catch((err) => console.log('error connecting to pool:', err));
}

try {
  createDbTables();
}
catch (err) {
  console.log('error:', err);
}