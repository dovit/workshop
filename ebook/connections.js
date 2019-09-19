const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/database');

mongoose.connection
    .on('connected', function() {
        console.log('connected');
    })

mongoose.connection
.on('error', function(error) {
    console.log('Mongoose connection failed' + error)
});

var schema = new mongoose.Schema({name: 'string', size: 'string'});
var Tank = mongoose.model('Tank', schema);

console.log(Tank);
