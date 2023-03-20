const ProductController = require('../controllers/product.controller');

module.exports = (app) =>{
    // ======================================Loads up message to show we're connected to backend
    app.get('/api', ProductController.index);
    app.get('/api/products', ProductController.getAllProducts);
    app.post('/api/products', ProductController.createProduct);
    app.get('/api/products/:id', ProductController.getProduct);
    // app.put('/api/products/:id', );
    // app.delete('/api/products/:id', );
}