const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json()); // req body
app.use(cors());

//ROUTES

//register and login routes
app.use('/auth', require('./routes/jwtAuth')); // activate routes
app.use('/dashboard', require('./routes/dashboard')); // dashboard route

app.listen(5000, () => {
  console.log('server is running on port 5000');
});
