const listController = {};

const pool = require('../model/db.js');
const queries = require('../model/queries.js');

listController.getWatchLists = async (req, res, next) => {
  await pool.connect()
    .then(async (client) => {
      return client.query(queries.getWatchLists, [req.params.id])
        .then((response) => {
          res.status(200).json(response.rows);
          return next;
        })
        .catch(err => console.log('Error:', err))
        .finally( client.release() );
    })
    .catch(err => console.log('error connecting', err));
};

listController.getActorsFromList = async (req, res, next) => {

  const { directorId, listId } = req.params;

  

  await pool.connect()
    .then(async (client) => {
      return client.query(queries.getActorsFromList, [req.params.id])
        .then((response) => {
          res.status(200).json(response.rows);
          return next;
        })
        .catch(err => console.log('Error:', err))
        .finally( client.release() );
    })
    .catch(err => console.log('error connecting', err));
};

module.exports = listController;