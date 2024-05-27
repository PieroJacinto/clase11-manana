var express = require('express');
var router = express.Router();
const genreController = require('../controllers/genreController')

router.get('/:id', genreController.genreDetail);

module.exports = router;