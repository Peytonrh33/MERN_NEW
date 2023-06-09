require('dotenv').config();
const mongoose = require('mongoose');
const dbName = process.env.DB;
const dbURI = process.env.DBURI;
const username = process.env.DB_USERNAME;
const pw = process.env.PASSWORD;
const uri = `mongodb+srv://${username}:${pw}@${dbURI}${dbName}?retryWrites=true&w=majority`;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));