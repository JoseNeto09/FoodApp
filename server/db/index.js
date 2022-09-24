const mongoose = require('mongoose');

mongoose
    .connect('mongodb://localhost:27017/my-project', { userNewUrlParser: true})
    .catch(e => {
        console.error('Error connecting', e.message);
    });

const db = mongoose.connection

module.exports = db