const noteController = {};

const pool = require('../model/db.js');
const queries = require('../model/queries.js');

noteController.getActorNotes = async (req, res, next) => {
  await pool.connect()
    .then(async (client) => {
      return client.query(queries.getActorNotes, [req.params.id])
        .then((response) => {
          res.status(200).json(response.rows);
          return next();
        })
        .catch(err => console.log('Error:', err))
        .finally(client.release());
    })
    .catch(err => console.log('error connecting', err));
};

noteController.addNoteToActor = async (req, res, next) => {

  const { actor_id, director_id, text, private_flag } = req.body;

  await pool.connect()
    .then(async (client) => {
      return client.query(queries.addNoteToActor, [director_id, actor_id, text, private_flag])
        .then((response) => {
          res.status(200).json(response.rows[0]);
          return next();
        })
        .catch(err => console.log('Error:', err))
        .finally(client.release());
    })
    .catch(err => console.log('error connecting', err));
};

noteController.deleteNoteFromActor = async (req, res, next) => {

  const { noteId } = req.params;
  const { actor_id } = req.body;

  await pool.connect()
    .then(async (client) => {
      return client.query(queries.deleteNoteFromActor, [noteId, actor_id])
        .then((response) => {
          if (response.rowCount) {
            res.status(200).json({ message: 'Note removed from user' });
          }
          res.status(422).json({ message: 'Unable to process the request' });
          return next();
        })
        .catch(err => console.log('Error:', err))
        .finally(client.release());
    })
    .catch(err => console.log('error connecting', err));
};

module.exports = noteController;