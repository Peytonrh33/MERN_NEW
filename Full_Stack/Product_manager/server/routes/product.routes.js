const ProductController = require('../controllers/product.controller');

module.exports = (app) =>{
    // ======================================Loads up message to show we're connected to backend
    app.get('/api', ProductController.index);
    app.post('/api/products', ProductController.createProduct);
    // app.get('/api/products/:id', );
    // app.put('/api/products/:id', );
    // app.delete('/api/products/:id', );
}