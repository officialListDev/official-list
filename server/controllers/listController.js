const listController = {};

const pool = require('../model/db.js');
const queries = require('../model/queries.js');

listController.getWatchLists = async (req, res, next) => {
  await pool.connect()
    .then(async (client) => {
      return client.query(queries.getWatchLists)
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