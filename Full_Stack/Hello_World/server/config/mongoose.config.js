const mongoose = require('mongoose');

mongoose.connect('mongodv://localhost/crmdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

.then(() => console.log("Established a connection to the database"))
.catch(err => console.log("Something went wrong when connecting to the Database", err));