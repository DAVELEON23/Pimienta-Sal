const express = require('express');
const router = express.Router();
const indexController = require("../controllers/indexControllers.js");

/* GET home page. */
router.get('/', indexController.home);
router.get('/detalle/:id', indexController.detalle);



module.exports = router;



// function(req, res, next) {
//   res.render('index', { title: 'Express' });
// }