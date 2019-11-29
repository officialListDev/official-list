const express = require('express');
const server = express();
const PORT = 4000;

const bodyParser = require('body-parser');

const apiRouter = require('./routes/api.js');
const authRouter = require('./routes/auth.js');

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.use('/auth', authRouter);
server.use('/api', apiRouter);

// catch-all route handler for any requests to an unknown route
server.all('*', (req, res, err) => {
  res.status(404).end();
});

/**
 * configire express global error handler
 * @see https://expressjs.com/en/guide/error-handling.html#writing-error-handlers
 */
server.use(
  (err, req, res, next) => {
    const defaultErr = {
      log: err.message,
      status: 500,
      message: 'Internal Server Error',
    }
    const errObj = Object.assign({}, defaultErr, err);
    // Console log for debugging
    console.log(errObj.log);
    return res.status(errObj.status).json(errObj.message);
  }
);


/**
 * Server
 */
server.listen(
  PORT,
  () => console.log(`App Running on PORT: ${PORT}`)
);
