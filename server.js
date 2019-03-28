const express = require('express');

const helmet = require('helmet');
const morgan = require('morgan');

const usersRouter = require('./users/userRouter');
const postsRouter = require('./posts/postRouter');

const server = express();

server.use(helmet());
server.use(morgan('dev'));
server.use(express.json());

server.use('/users', usersRouter); // custom middleware
server.use('/posts', postsRouter); // custom middleware

server.get('/', (req, res) => {
  res.send('Hello World')
});

// function only() {
//     return function(req, res, next) {
//       const personName = (req.method === "POST" || req.method === "PUT");
//       if(personName.toUpperCase() === name.toUpperCase()) {
//         next();
//       } else {
//         res.status(401).json({
//           message: 'You are not allowed mate'
//         })
//       }
//     }
//   }
  
server.get('/', async (req, res) => {
  try {
    const shoutouts =  db('shoutouts');
    const messageOfTheDay = process.env.MOTD || "MR DARKNESS WASSUP"
    res.status(200).json({motd:messageOfTheDay, shoutouts});
  } catch (error) {
    console.error('\nERROR', error);
    res.status(500).json({ error: 'Cannot retrieve the shoutouts' });
  }
});


module.exports = server;