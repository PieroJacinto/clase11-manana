var express = require('express');
var router = express.Router();
const actorController = require('../controllers/actorController')

router.get('/:id', actorController.actorDetail);

module.exports = router;