const env = process.env.NODE_ENV || "development";
const mongoose = require('mongoose');
const config = require('./config')[env];
const dbUrl = config.db;

module.exports = async function(){

    try{
        const conn = await mongoose.connect(dbUrl,{ useNewUrlParser: true });
        return conn;
    }
    catch(err){
        console.error('Error Connecting DB');
        throw err;
    }
}

