const mongoose = require('mongoose');
let db = {};
mongoose.connect('mongodb+srv://user:Password_123@cluster0.7sc0t.mongodb.net/reactapp',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err, database) => {
        err ? console.log(err) : console.log('connected to database')
    });
module.exports = mongoose.connection;