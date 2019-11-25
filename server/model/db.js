// docs: https://node-postgres.com/features/pooling
// credentials: https://data.heroku.com/datastores/d9b359b6-af0f-4a04-94b9-bff0c4a7c601#administration
const { Pool } = require('pg');
require('dotenv').config();
const queryStr = require('./queries.js'); 

// connect to heroku db in cloud (postgres)
const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: 5432,
  ssl: true,
  idleTimeoutMillis: 3000, // let's avoid memory leaks with these time-outs!
  connectionTimeoutMillis: 2000,
});

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
        .then(() => client.release());
    });
}
createDbTables();

// export our connection to the db
module.exports = pool;
