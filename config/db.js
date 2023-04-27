
const mongoose = require('mongoose');
const mongoURI = process.env.MONGO_URI;
const db = mongoose.connection;


    
    mongoose.connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true})

    db.on('connected', () => {
        console.log('Mongo DB Connection Successful');
    })
    db.on('error', () => {
        console.log('Mongo DB Connection Failed');
    })

    module.exports = mongoose;
   