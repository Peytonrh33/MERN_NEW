const express = require('express');
const cors = require('cors');

const app = express();
const port = 8000;
// =============================================Cors to make cross requests from front to back
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

require('./server/routes/product.routes')(app);
    
app.listen(port, () => console.log(`Houston we're live on localhost:${port}`) );