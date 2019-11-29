const actorController = {};

const pool = require('../model/db.js');
const queries = require('../model/queries.js');

actorController.getActors = async (req, res, next) => {
  
  let values = [];

  if(req.query){
    const { city } = req.query;
    if(city) {
      values.push(city);
    }
  }

  await pool.connect()
    .then(async (client) => {
      return client.query(queries.getActors, values)
        .then((response) => {
          // console.log("response", response.rows);
          res.status(200).json(response.rows);
          return next;
        })
        .catch(err => console.log('Error:', err))
        .finally( client.release() );
    })
    .catch(err => console.log('error connecting', err));
};


module.exports = actorController;