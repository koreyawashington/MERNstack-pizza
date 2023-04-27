require('dotenv').config({path: '.env'});

const express = require('express')


const db = require('./config/db');

const PORT = process.env.PORT || 8000

const app = express()

app.use(express.json())

//=============Configuring Engine
app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());


/*
//  * Middlewares
//  */
// app.use((req, res, next) => {
//     console.log('I run on all routes!');
//     next();

// });
// Parsing incoming data from request
// app.use(bodyparser.json());
// app.use(express.urlencoded({extended: false}));






app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})