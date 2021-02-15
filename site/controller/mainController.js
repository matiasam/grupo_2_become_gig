const users = require('../database/users');

module.exports = {
    index: (req, res) => {
        res.render('index', {users});
    },
    detail: (req, res) => {
        res.render('detail');
    },
    contact: (req, res) => {
        res.send('Estoy en la página de contacto');
    },
};