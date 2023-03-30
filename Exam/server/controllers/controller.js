const Store = require('../models/model')
// You can change the store whatever the exam is about like Product or Author

// ctrl f Store and chnage to whatever you weirdo

module.exports.getAll = (req, res) =>{
    Store.find()
        .then((store) =>{
            res.json(store)
        })
        .catch((err) =>{
            res.status(400).json(err);
        });
}

module.exports.create = (req, res) =>{
    Store.create(req.body)
        .then((store) =>{
            res.json(store)
        })
        .catch((err) =>{
            res.status(400).json(err);
        });
}

module.exports.getOne = (req, res) =>{
    Store.findOne({_id: req.params.id})
        .then((store) =>{
            res.json(store)
        })
        .catch((err) =>{
            res.status(400).json(err);
        });
}

module.exports.update = (req, res) =>{
    Store.findOneAndUpdate({_id: req.params.id}, req.body,{
        new: true,
        runValidators: true
    })
        .then((store) =>{
            res.json(store)
        })
        .catch((err) =>{
            res.status(400).json(err);
        });
}

module.exports.delete = (req, res) =>{
    Store.deleteOne({_id: req.params.id})
        .then((store) =>{
            res.json(store)
        })
        .catch((err) =>{
            res.status(400).json(err);
        });
}