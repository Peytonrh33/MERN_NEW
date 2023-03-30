const Controller = require('../controllers/controller');

// ctrl f to change the REAPLCE me's to the doo hickey

module.exports = app =>{
    app.get('/api/stores', Controller.getAll);
    app.post('/api/stores', Controller.create);
    app.get('/api/stores/:id', Controller.getOne);
    app.put('/api/stores/:id', Controller.update);
    app.delete('/api/stores/:id', Controller.delete);
};