const express = require('express');
const cors = require('cors');

require('dotenv').config();
require('./server/config/mongoose.config');

const app = express();
const port = 8000;

require('./server/config/mongoose.config');
app.use(cors(), express.json(), express.urlencoded({extended: true}));
// !! DO NOT PUT ABOVE THIS LINE. MAKE SURE IT'S BELOW IT
require('./server/routes/routes')(app);
app.listen(port, () => console.log(`Listening on port: ${port}`) );