const express = require("express");
const router = express.Router();
const boardController = require('../controllers/dbcon');


router.get('/', boardController.read);

module.exports = router;