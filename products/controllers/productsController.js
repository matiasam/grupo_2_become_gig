// Datos
const products = require('../database/products');

module.exports = {
    index: (req, res) => {
        res.send(products)    
        ;
    },
    show: (req, res) => {
        let product = products.find(product => product.id == req.params.id);  
        res.send(product);
    } 
};

