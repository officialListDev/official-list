const bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator');
const queries = require('../../model/queries.js');
const pool = require('../../model/db.js');


const authController = {};
const SALT_WORK_FACTOR = 10;

authController.directorSignup = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const {
    first_name, last_name, email, password, phone_number, company_name,
  } = req.body;

  bcrypt.hash(password, SALT_WORK_FACTOR)
    .then(async (hashedPassword) => {
      const values = [first_name, last_name, email, hashedPassword, phone_number, company_name];
      await pool.connect()
        .then((client) => client.query(queries.seedDirectorsTable, values)
          .then((response) => {
            res.status(200).json(response.rows[0]);
            return next;
          })
          .catch((err) => console.log('Error:', err))
          .finally(client.release()))
        .catch((err) => console.log('error connecting', err));
    });
};

authController.directorLogin = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  const values = [email];

  await pool.connect()
    .then((client) => {
      client.query(queries.getDirector, values, (err, director) => {
        if (err) {
          return res.status(404).json({ errors: 'Incorrect email or password.' });
        }
        // console.log('user\'s password', password, director.rows[0].password);
        // If email address is found on the database
        if (director.rows[0]) {
          bcrypt.compare(password, director.rows[0].password, (pwErr, passwordMatch) => {
            client.release();
            // console.log('what is err', err, passwordMatch);
            if (pwErr || !passwordMatch) {
              return res.status(404).json({ errors: 'Incorrect email or password.' });
            }
            const directorProfile = {
              directorId: director.rows[0].id,
              firstName: director.rows[0].first_name,
              lastName: director.rows[0].last_name,
            };

            return res.status(200).json(directorProfile);
          });
        }
      });
    })
    .catch((err) => console.log('error connecting', err));
};

/** Actor Auth */
authController.actorSignup = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const {
    headshot, resume, first_name, last_name, email, password, phone_number, city, facebook, twitter, instagram, youtube, bio,
  } = req.body;

  bcrypt.hash(password, SALT_WORK_FACTOR)
    .then(async (hashedPassword) => {
      const values = [headshot, resume, first_name, last_name, email, hashedPassword, phone_number, city, facebook, twitter, instagram, youtube, bio];
      await pool.connect()
        .then((client) => client.query(queries.seedActorsTable, values)
          .then((response) => res.status(200).json(response.rows[0]))
          .catch((err) => console.log('Error:', err))
          .finally(client.release()))
        .catch((err) => console.log('error connecting', err));
    });
};

authController.actorLogin = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const { email, password } = req.body;
  const values = [email];

  await pool.connect()
    .then((client) => {
      client.query(queries.getActor, values, (err, actor) => {
        if (err) {
          return res.status(404).json({ errors: 'Incorrect email# or password.' });
        }
        // console.log('user\'s password', password, actor.rows[0].password);
        // If email address is found on the database
        if (actor.rows[0]) {
          bcrypt.compare(password, actor.rows[0].password, (err, passwordMatch) => {
            client.release();
            // console.log('what is err', err, passwordMatch);
            if (err || !passwordMatch) {
              return res.status(404).json({ errors: 'Incorrect email or password#.' });
            }
            return res.send('Logged in');
          });
        }
      });
    })
    .catch((err) => console.log('error connecting', err));
};

// first_name, last_name, email, password, phone_number, company_name
authController.validate = (method) => {
  switch (method) {
  case 'directorSignup': {
    return [
      body('first_name').isLength({ min: 1 }).withMessage('First Name is Required').trim()
        .escape(),
      body('last_name').isLength({ min: 1 }).withMessage('Last Name is Required').trim()
        .escape(),
      body('email').isEmail().normalizeEmail().withMessage('Enter valid email'),
      body('password').isLength({ min: 6 }).withMessage('Password should be minimum 6 characters'),
      body('phone_number').isMobilePhone().withMessage('Enter valid phone number'),
      body('company_name').exists(),
    ];
  }
  case 'directorLogin': {
    return [
      body('email').isEmail().normalizeEmail().withMessage('Enter valid email'),
      body('password').isLength({ min: 6 }).withMessage('Password should be minimum 6 characters'),
    ];
  }
  // headshot, resume, first_name, last_name, email, password, phone_number, city, facebook, twitter, instagram, youtube, bio
  case 'actorSignup': {
    return [
      body('headshot'),
      body('resume').exists(),
      body('first_name').isLength({ min: 1 }).withMessage('First Name is Required').trim()
        .escape(),
      body('last_name').isLength({ min: 1 }).withMessage('Last Name is Required').trim()
        .escape(),
      body('email').isEmail().normalizeEmail().withMessage('Enter valid email'),
      body('password').isLength({ min: 6 }).withMessage('Password should be minimum 6 characters'),
      body('phone_number').isMobilePhone().withMessage('Enter valid phone number'),
      body('city').isLength({ min: 1 }).withMessage('City is Required').trim()
        .escape(),
      body('facebook'),
      body('twitter'),
      body('instagram'),
      body('youtube'),
      body('bio').isLength({ min: 1 }).withMessage('Bio is required').trim()
        .escape(),
    ];
  }
  case 'actorLogin': {
    return [
      body('email').isEmail().normalizeEmail().withMessage('Enter valid email'),
      body('password').isLength({ min: 6 }).withMessage('Password should be minimum 6 characters'),
    ];
  }
  }
};


module.exports = authController;
