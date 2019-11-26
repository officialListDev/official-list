const pool = require('./db.js');
const faker = require('faker');
const queryStr = require('./queries.js'); 

async function seedDb (){

  // get fake data values from 'faker'
  const fakeDataValues = [
    faker.name.firstName(),
    faker.name.lastName(),
    faker.internet.email(),
    faker.internet.password(),
    faker.phone.phoneNumber(),
    faker.company.companyName(),
  ];

  // connect to our pool
  await pool.connect()
    .then((client) => {
      // run each of our 'seed' queries, using the associated fake data values
      client.query(queryStr.seedDirectorsTable, fakeDataValues)
        .then((newRows) => console.log(`Director: ${newRows.rows[0].first_name}`))
        .then(() => client.release())
        .catch((err) => console.log('Error adding director', err));
    }).catch((err) => console.log('Error Connecting ', err));
}

// run our 'seed row' function N times
const numSeededRows = 25;
for (let i = 0; i < numSeededRows; i += 1) {
  seedDb();
}