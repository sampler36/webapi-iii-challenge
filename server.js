const express = require('express');

const helmet = require('helmet');
const morgan = require('morgan');

const usersRouter = require('./users/userRouter');

const server = express();

server.use(helmet());
server.use(morgan('dev'));
server.use(express.json());

server.use('/users', usersRouter); // custom middleware

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
  

module.exports = server;