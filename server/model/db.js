// docs: https://node-postgres.com/features/pooling
// credentials: https://data.heroku.com/datastores/d9b359b6-af0f-4a04-94b9-bff0c4a7c601#administration
const { Pool } = require('pg');

// connect to heroku db in cloud (postgres)
const pool = new Pool({
  user: 'kcinrhmkvlowvx',
  host: 'ec2-184-73-192-251.compute-1.amazonaws.com',
  database: 'd2g762gqdkus8a',
  password: '11baca03bb0f46e6c363dc60b25128ed147a19446b2cd5cb2634819a145c5fe6',
  port: 5432,
  ssl: true,
  idleTimeoutMillis: 30000, // let's avoid memory leaks with these time-outs!
  connectionTimeoutMillis: 2000,
});

// export our connection to the db
module.exports = pool;