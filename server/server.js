/**
 * https://blog.logrocket.com/how-to-build-a-server-rendered-react-app-with-next-express-d5a389e7ab2f/
 */
const express = require('express');
const next = require('next');
    
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const apiRouter = require('./routes/api.js');
    
app.prepare()
  .then(() => {
    const server = express();
    
    // Server endpoint
    // Add middleware here
    // https://dev.to/aurelkurtula/introduction-to-nextjs---adding-express-and-mongo-to-the-project-2d38
    server.use('/api', apiRouter);

    // Default Path
    server.get('*', (req, res) => {
      return handle(req, res);
    });  
  
    server.listen(3000, (err) => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });