// docs: https://node-postgres.com/features/pooling
// credentials: https://data.heroku.com/datastores/d9b359b6-af0f-4a04-94b9-bff0c4a7c601#administration
const { Pool } = require('pg');
require('dotenv').config();

// connect to heroku db in cloud (postgres)
const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: 5432,
  ssl: true,
  idleTimeoutMillis: 4000, // let's avoid memory leaks with these time-outs!
  connectionTimeoutMillis: 4000,
});

// export our connection to the db
module.exports = pool;