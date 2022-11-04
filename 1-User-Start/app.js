const express = require('express');
const morgan = require('morgan');


const app = express();

// 1) MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());


app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// 3) ROUTES
const userRouter = require('./routes/userRoutes');

app.use('/api/v1/users', userRouter);

module.exports = app;
