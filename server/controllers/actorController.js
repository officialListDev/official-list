const actorController = {};

const pool = require('../model/db.js');
const queries = require('../model/queries.js');

actorController.getActors = async (req, res, next) => {
  let getActorsQuery = queries.getActors; 
  let actorsQueryValue = [];

  if(Object.values(req.query).length > 0){
    const conditions = actorController.buildSearchQuery(req.query);
    getActorsQuery = queries.getActors + conditions.where;
    actorsQueryValue = conditions.values;
  }

  await pool.connect()
    .then(async (client) => {
      return client.query(getActorsQuery, actorsQueryValue)
        .then((response) => {
          return res.status(200).json(response.rows);
        })
        .catch(err => console.log('Error:', err))
        .finally( client.release() );
    })
    .catch(err => console.log('error connecting', err));
};

actorController.buildSearchQuery = (params) => {
  let conditions = [];
  let values = [];
  let count = 1;
  
  if (typeof params.name !== 'undefined') {
    conditions.push(` AND first_name LIKE $${count}`);
    values.push('%' + params.name + '%');
    count += 1;
  }
  
  if (typeof params.city !== 'undefined') {
    conditions.push(` AND city=$${count};`);
    values.push(params.city);
    count += 1;
  }

  return {
    where: conditions.length > 1 ?
      conditions.join('') : conditions[0],
    values: values,
  };
};


module.exports = actorController;