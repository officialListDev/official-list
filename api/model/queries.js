module.exports = {
  createDirectorsTable: 'CREATE TABLE IF NOT EXISTS directors (id SERIAL PRIMARY KEY, first_name VARCHAR(50) NOT NULL, last_name VARCHAR(50) NOT NULL, email VARCHAR NOT NULL, password VARCHAR NOT NULL, phone_number VARCHAR, company_name VARCHAR(50))',
  createActorsTable: 'CREATE TABLE IF NOT EXISTS actors (id SERIAL PRIMARY KEY, headshot VARCHAR, resume VARCHAR, first_name VARCHAR(50) NOT NULL, last_name VARCHAR(50) NOT NULL, email VARCHAR NOT NULL, password VARCHAR NOT NULL, phone_number VARCHAR(50), city VARCHAR(50) NOT NULL, facebook VARCHAR(50), twitter VARCHAR(50), instagram VARCHAR(50), youtube VARCHAR(50), bio VARCHAR)',
  createWatchlistsTable: 'CREATE TABLE IF NOT EXISTS watchlists (id SERIAL PRIMARY KEY, name VARCHAR(50) NOT NULL, description VARCHAR)',
  createAuditionsTable: 'CREATE TABLE IF NOT EXISTS auditions (id SERIAL PRIMARY KEY, actor_id INTEGER NOT NULL REFERENCES actors(id) ON DELETE CASCADE, date VARCHAR NOT NULL, show_name VARCHAR NOT NULL)',
  createNotesTable: 'CREATE TABLE IF NOT EXISTS notes (id SERIAL PRIMARY KEY, director_id INTEGER NOT NULL REFERENCES directors(id) ON DELETE CASCADE, actor_id INTEGER NOT NULL REFERENCES actors(id) ON DELETE CASCADE, text VARCHAR, private_flag BOOLEAN)',
  createDirectorWatchlistsTable: `
  CREATE TABLE IF NOT EXISTS director_watchlists 
  (director_id INTEGER NOT NULL, 
  watchlist_id INTEGER NOT NULL, 
  PRIMARY KEY (director_id, watchlist_id), 
    CONSTRAINT director_watchlists_director_id_fkey FOREIGN KEY (director_id) 
      REFERENCES directors (id)
      MATCH SIMPLE ON UPDATE CASCADE ON DELETE CASCADE, 
    CONSTRAINT director_watchlists_list_id FOREIGN KEY (watchlist_id) 
      REFERENCES watchlists (id) 
      MATCH SIMPLE ON UPDATE CASCADE ON DELETE CASCADE)`,
  createWatchlistActorsTable: `
  CREATE TABLE IF NOT EXISTS watchlist_actors
  (watchlist_id INTEGER NOT NULL,
  actor_id INTEGER NOT NULL,
  PRIMARY KEY (watchlist_id, actor_id),
    CONSTRAINT watchlist_actors_watchlist_id_fkey FOREIGN KEY (watchlist_id)
      REFERENCES watchlists (id)
      MATCH SIMPLE ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT watchlist_actors_actor_id_fkey FOREIGN KEY (actor_id)
      REFERENCES actors (id)
      MATCH SIMPLE ON UPDATE CASCADE ON DELETE CASCADE)`,
  // https://stackoverflow.com/questions/35338711/cannot-drop-table-users-because-other-objects-depend-on-it
  dropDirectorsTable: 'DROP TABLE IF EXISTS directors cascade',
  dropActorsTable: 'DROP TABLE IF EXISTS actors cascade',
  dropWatchlistsTable: 'DROP TABLE IF EXISTS watchlists cascade',
  dropAuditionsTable: 'DROP TABLE IF EXISTS auditions cascade',
  dropNotesTable: 'DROP TABLE IF EXISTS notes cascade',
  dropDirectorWatchlistsTable: 'DROP TABLE IF EXISTS director_watchlists cascade',
  dropWatchlistActorsTable: 'DROP TABLE IF EXISTS watchlist_actors cascade',
  seedDirectorsTable: 'INSERT INTO directors("first_name", "last_name", "email", "password", "phone_number", "company_name") VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
  seedActorsTable: 'INSERT INTO actors("headshot", "resume", "first_name", "last_name", "email", "password", "phone_number", "city", "facebook", "twitter", "instagram", "youtube", "bio") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING *',
  seedWatchlistsTable: 'INSERT INTO watchlists("name", "description") VALUES ($1, $2) RETURNING *',

  getWatchLists: `
  SELECT watchlists.id, watchlists.name, watchlists.description
  FROM watchlists 
  INNER JOIN director_watchlists 
  ON director_watchlists.watchlist_id = watchlists.id 
  WHERE director_watchlists.director_id=$1;
  `,
  getActors: 'SELECT * FROM actors WHERE 1=1 ',

  getDirector: 'SELECT * from directors where email=$1;',
  getActor: 'SELECT * from actors where email=$1;',

  getActorsFromList: `
  SELECT *
  FROM actors 
  INNER JOIN watchlist_actors 
  ON watchlist_actors.actor_id = actors.id 
  WHERE watchlist_actors.watchlist_id=$1;
  `,

  addActorToList: `
  INSERT INTO watchlist_actors ("watchlist_id", "actor_id") VALUES ($1, $2) RETURNING *;
  `,

  deleteActorFromList: `
  DELETE FROM watchlist_actors where watchlist_id=$1 AND actor_id=$2;
  `,

  getActorNotes: `
  SELECT * FROM notes where actor_id=$1;
  `,

  addNoteToActor: `
  INSERT INTO notes ("director_id", "actor_id", "text", "private_flag") VALUES($1, $2, $3, $4) RETURNING *;
  `,

  deleteNoteFromActor: `
  DELETE FROM notes where id=$1 AND actor_id=$2;
  `,
};

/* Query to test that our director_watchlists JOIN table was created correctly
SELECT
    tc.table_schema,
    tc.constraint_name,
    tc.table_name,
    kcu.column_name,
    ccu.table_schema AS foreign_table_schema,
    ccu.table_name AS foreign_table_name,
    ccu.column_name AS foreign_column_name
FROM
    information_schema.table_constraints AS tc
    JOIN information_schema.key_column_usage AS kcu
      ON tc.constraint_name = kcu.constraint_name
      AND tc.table_schema = kcu.table_schema
    JOIN information_schema.constraint_column_usage AS ccu
      ON ccu.constraint_name = tc.constraint_name
      AND ccu.table_schema = tc.table_schema
WHERE tc.constraint_type = 'FOREIGN KEY' AND tc.table_name='director_watchlists';
*/