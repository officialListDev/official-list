const pool = require('./db.js');
const faker = require('faker');
const queryStr = require('./queries.js'); 

async function seedDbActors (){

  // get fake data values from 'faker'
  const fakeDataValues = [
    faker.image.people(),
    faker.lorem.paragraph(),
    faker.name.firstName(),
    faker.name.lastName(),
    faker.internet.email(),
    faker.internet.password(),
    faker.phone.phoneNumber(),
    faker.address.city(),
    faker.internet.url(),
    faker.internet.url(),
    faker.internet.url(),
    faker.internet.url(),
    faker.lorem.paragraph(),
  ];

  // connect to our pool
  await pool.connect()
    .then((client) => {
      // run each of our 'seed' queries, using the associated fake data values
      client.query(queryStr.seedActorsTable, fakeDataValues)
        .then((newRows) => console.log(`Actor: ${newRows.rows[0].first_name}`))
        .then(() => client.release())
        .catch((err) => console.log('Error adding actor', err));
    }).catch((err) => console.log('Error Connecting ', err));
}

// run our 'seed row' function N times
const numSeededRows = 25;
for (let i = 0; i < numSeededRows; i += 1) {
  seedDbActors();
}