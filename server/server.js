/**
 * https://blog.logrocket.com/how-to-build-a-server-rendered-react-app-with-next-express-d5a389e7ab2f/
 */
const express = require('express');
const server = express();

const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });

const handle = nextApp.getRequestHandler();
const bodyParser = require('body-parser');

const apiRouter = require('./routes/api.js');
const authRouter = require('./routes/auth.js');
    
nextApp.prepare()
  .then(() => {

    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: true }));

    server.use('/auth', authRouter);
    server.use('/api', apiRouter);

    server.get('*', (req,res) => {
      // console.log("Hello");
      return handle(req,res) // for all the react stuff
    })

    server.listen(3000, err => {
      if (err) throw err;
      console.log(`ready at http://localhost:${3000}`)
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });