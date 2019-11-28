const actorController = {};

const pool = require('../model/db.js');
const queries = require('../model/queries.js');

actorController.getActors = async (req, res, next) => {
  await pool.connect()
    .then(async (client) => {
      return client.query(queries.getActors)
        .then((response) => {
          res.status(200).json(response.rows);
          return next;
        })
        .catch(err => console.log('Error:', err))
        .finally( client.release() );
    })
    .catch(err => console.log('error connecting', err));
};


module.exports = actorController;