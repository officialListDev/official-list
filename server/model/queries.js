module.exports = {
  createDirectorsTable: 'CREATE TABLE IF NOT EXISTS directors (id SERIAL PRIMARY KEY, first_name VARCHAR(50), last_name VARCHAR(50), email VARCHAR, password VARCHAR, phone_number VARCHAR(15), company_name VARCHAR(50))',
  createActorsTable: 'CREATE TABLE IF NOT EXISTS actors (id SERIAL PRIMARY KEY, headshot VARCHAR, resume VARCHAR, first_name VARCHAR(50), last_name VARCHAR(50), email VARCHAR, password VARCHAR, phone_number VARCHAR(50), city VARCHAR(50), facebook VARCHAR(50), twitter VARCHAR(50), instagram VARCHAR(50), youtube VARCHAR(50), bio VARCHAR)',
  createWatchlistsTable: 'CREATE TABLE IF NOT EXISTS watchlists (id SERIAL PRIMARY KEY, list_name VARCHAR(50), list_description VARCHAR(300))',
  createAuditionsTable: 'CREATE TABLE IF NOT EXISTS auditions (id SERIAL PRIMARY KEY, actor_id INTEGER REFERENCES actors(id), date VARCHAR, show_name VARCHAR)',
  createNotesTable: 'CREATE TABLE IF NOT EXISTS notes (id SERIAL PRIMARY KEY, director_id INTEGER REFERENCES directors(id), actor_id INTEGER REFERENCES actors(id), text VARCHAR, private_flag BOOLEAN)',
  dropTables: 'DROP TABLE directors',
  // createSearchTable: 'CREATE TABLE IF NOT EXISTS searches (_id SERIAL PRIMARY KEY, url VARCHAR, result VARCHAR)',
  // postSearchTable: 'INSERT INTO searches (url, result) VALUES($1, $2)',
  // queryLogging: function (){
  //   console.log('\n*********** visitsController.createVisit ****************', `\nMETHOD: ${req.method} \nENDPOINT: '${req.url}' \nBODY: ${JSON.stringify(req.body)} \nLOCALS: ${JSON.stringify(res.locals)} `);
  // },
};