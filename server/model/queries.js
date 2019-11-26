module.exports = {
  createDirectorsTable: 'CREATE TABLE IF NOT EXISTS directors (id SERIAL PRIMARY KEY, first_name VARCHAR(50) NOT NULL, last_name VARCHAR(50) NOT NULL, email VARCHAR NOT NULL, password VARCHAR NOT NULL, phone_number VARCHAR, company_name VARCHAR(50))',
  createActorsTable: 'CREATE TABLE IF NOT EXISTS actors (id SERIAL PRIMARY KEY, headshot VARCHAR, resume VARCHAR, first_name VARCHAR(50) NOT NULL, last_name VARCHAR(50) NOT NULL, email VARCHAR NOT NULL, password VARCHAR NOT NULL, phone_number VARCHAR(50), city VARCHAR(50) NOT NULL, facebook VARCHAR(50), twitter VARCHAR(50), instagram VARCHAR(50), youtube VARCHAR(50), bio VARCHAR)',
  createWatchlistsTable: 'CREATE TABLE IF NOT EXISTS watchlists (id SERIAL PRIMARY KEY, list_name VARCHAR(50) NOT NULL, list_description VARCHAR(300))',
  createAuditionsTable: 'CREATE TABLE IF NOT EXISTS auditions (id SERIAL PRIMARY KEY, actor_id INTEGER NOT NULL REFERENCES actors(id) ON DELETE CASCADE, date VARCHAR NOT NULL, show_name VARCHAR NOT NULL)',
  createNotesTable: 'CREATE TABLE IF NOT EXISTS notes (id SERIAL PRIMARY KEY, director_id INTEGER NOT NULL REFERENCES directors(id) ON DELETE CASCADE, actor_id INTEGER NOT NULL REFERENCES actors(id) ON DELETE CASCADE, text VARCHAR, private_flag BOOLEAN)',
  // createDirectorWatchlists: 'CREATE TABLE IF NOT EXISTS director_watchlists ()'
  // https://stackoverflow.com/questions/35338711/cannot-drop-table-users-because-other-objects-depend-on-it
  dropDirectorsTable: 'DROP TABLE IF EXISTS directors cascade',
  dropActorsTable: 'DROP TABLE IF EXISTS actors cascade',
  dropWatchlistsTable: 'DROP TABLE IF EXISTS watchlists cascade',
  dropAuditionsTable: 'DROP TABLE IF EXISTS auditions cascade',
  dropNotesTable: 'DROP TABLE IF EXISTS notes cascade',
  seedDirectorsTable: 'INSERT INTO directors("first_name", "last_name", "email", "password", "phone_number", "company_name") VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
  // postSearchTable: 'INSERT INTO searches (url, result) VALUES($1, $2)',
  // queryLogging: function (){
  //   console.log('\n*********** visitsController.createVisit ****************', `\nMETHOD: ${req.method} \nENDPOINT: '${req.url}' \nBODY: ${JSON.stringify(req.body)} \nLOCALS: ${JSON.stringify(res.locals)} `);
  // },
};