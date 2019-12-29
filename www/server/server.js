const express = require('express');

const server = express();

const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const PORT = 3000;
const nextApp = next({ dev });

const handle = nextApp.getRequestHandler();

const authRouter = require('./routes/auth.js');

nextApp.prepare()
  .then(() => {
    server.use(express.json());
    server.use(express.urlencoded({ extended: true }));

    server.use('/auth', authRouter);

    server.get('*', (req, res) => handle(req, res));

    server.listen(PORT, (err) => {
      if (err) throw err;
      console.log(`listening on port ${PORT}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
