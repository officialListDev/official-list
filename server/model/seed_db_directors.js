const pool = require('./db.js');
const faker = require('faker');
const queryStr = require('./queries.js'); 

async function seedDb (){

  const fakeDataValues = [
    faker.name.firstName(),
    faker.name.lastName(),
    faker.internet.email(),
    faker.internet.password(),
    faker.phone.phoneNumber(),
    faker.company.companyName(),
  ];

  await pool.connect()
    .then((client) => {
      client.query(queryStr.seedDirectorsTable, fakeDataValues)
        .then((newRows) => console.log(`Director: ${newRows.rows[0].first_name}`))
        .catch((err) => console.log('Error adding director', err))
        .finally(() => client.release());
    }).catch((err) => console.log('Error Connecting ', err));
}

seedDb();