const pool = require('./db.js');
const faker = require('faker');
const queryStr = require('./queries.js'); 

async function seedDbWatchlists (){

  // get fake data values from 'faker'
  const fakeDataValues = [
    faker.lorem.word(),
    faker.lorem.paragraph(),
  ];
  
  // connect to our pool
  await pool.connect()
    .then((client) => {
      // run each of our 'seed' queries, using the associated fake data values
      client.query(queryStr.seedWatchlistsTable, fakeDataValues)
        .then((newRows) => console.log(`Watchlist: ${newRows.rows[0].list_name}`))
        .then(() => client.release())
        .catch((err) => console.log('Error adding watchlist', err));
    }).catch((err) => console.log('Error Connecting ', err));
}

// run our 'seed row' function N times
const numSeededRows = 25;
for (let i = 0; i < numSeededRows; i += 1) {
  seedDbWatchlists();
}