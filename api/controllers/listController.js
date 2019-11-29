const listController = {};

const pool = require('../model/db.js');
const queries = require('../model/queries.js');

listController.getWatchLists = async (req, res, next) => {
  await pool.connect()
    .then(async (client) => {
      return client.query(queries.getWatchLists, [req.params.id])
        .then((response) => {
          res.status(200).json(response.rows);
          return next();
        })
        .catch(err => console.log('Error:', err))
        .finally(client.release());
    })
    .catch(err => console.log('error connecting', err));
};

listController.getActorsFromList = async (req, res, next) => {

  const { directorId, listId } = req.params;

  await pool.connect()
    .then(async (client) => {
      return client.query(queries.getActorsFromList, [listId])
        .then((response) => {
          console.log(response);
          res.status(200).json(response.rows);
          return next();
        })
        .catch(err => console.log('Error:', err))
        .finally(client.release());
    })
    .catch(err => console.log('error connecting', err));
};

listController.addActorToList = async (req, res, next) => {

  const { listId } = req.params;
  const { actor_id } = req.body;

  await pool.connect()
    .then(async (client) => {
      return client.query(queries.addActorToList, [listId, actor_id])
        .then((response) => {
          res.status(200).json(response.rows[0]);
          return next();
        })
        .catch(err => console.log('Error:', err))
        .finally(client.release());
    })
    .catch(err => console.log('error connecting', err));
};

listController.deleteActorFromList = async (req, res, next) => {

  const { listId } = req.params;
  const { actor_id } = req.body;

  await pool.connect()
    .then(async (client) => {
      return client.query(queries.deleteActorFromList, [listId, actor_id])
        .then((response) => {
          if (response.rowCount) {
            res.status(200).json({ message: 'Actor removed from the watchlist' });
          }
          res.status(422).json({ message: 'Unable to process the request' });
          return next();
        })
        .catch(err => console.log('Error:', err))
        .finally(client.release());
    })
    .catch(err => console.log('error connecting', err));
};

module.exports = listController;