const express = require('express');

const server = express();
const PORT = 4000;

const cors = require('cors');

const apiRouter = require('./routes/api.js');

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use(cors({ origin: 'http://localhost:3000' }));

server.use('/api', apiRouter);

// catch-all route handler for any requests to an unknown route
server.all('*', (req, res) => {
  res.status(404).end();
});

/**
 * configire express global error handler
 * @see https://expressjs.com/en/guide/error-handling.html#writing-error-handlers
 */
server.use(
  (err, req, res) => {
    const defaultErr = {
      log: err.message,
      status: 500,
      message: 'Internal Server Error',
    };
    const errObj = { ...defaultErr, ...err };
    // Console log for debugging
    console.log(errObj.log);
    return res.status(errObj.status).json(errObj.message);
  },
);


/**
 * Server
 */
server.listen(
  PORT,
  () => console.log(`App Running on PORT: ${PORT}`),
);
