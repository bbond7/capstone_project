const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const userRoutes = express.Router();
const productRoutes = express.Router();

const app = express();
const port = process.env.PORT || 5000;

let User = require('./user.model');
let Product = require('./products.model');

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/capstone_project', { useNewUrlParser: true })
const connection = mongoose.connection;

connection.once('open', function() {
    console.log('MongoDB connection success');
});

userRoutes.route('/').get(function(req, res) {
    User.find(function(err, user) {
        if (err) {
            console.log(err);
        } else {
            res.json(user)
        }
    });
});

userRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    User.findById(id, function(err, user) {
        res.json(user);
    });
});

userRoutes.route('/add').post(function(req, res) {
    let user = new User(req.body);
    user.save()
        .then(user => {
            res.status(200).json({'user': 'user added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new user failed');
        });
});

productRoutes.route('/skis').get(function(req, res) {
    Product.find({category: 'Ski'}, function(err, products) {
        if (err) {
            console.log(err);
        } else {
            res.json(products); 
        }
    });
});

app.use('/user', userRoutes);
app.use('/products', productRoutes);

app.listen(port, () => {
    console.log('Server is running on port: ' + port);
});