require('dotenv').config({path: '.env'});

const express = require('express')
//import pizzas from mongodb from ./models/pizzaModel which is supposed to be connected to mongodb but not connected yet
const Pizzas = require('./models/pizzaModel')

const db = require('./config/db');

const PORT = process.env.PORT || 8000

const app = express()

app.use(express.json())

//=============Configuring Engine
app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());




app.get('/', (req, res) => {
  res.send('My server is working!')
})

app.get('/pizzasBackend', (req, res) => {

  Pizzas.find({}, (error, documents) => {

    if(error){
      log(error)
    }else{
      res.send(documents)
    }

  })
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})