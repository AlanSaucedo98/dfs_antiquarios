let express = require('express');

let router = express.Router();


//controladores
const mainController = require("../controllers/mainController")

/* GET home page. */
router.get('/',mainController.index);

module.exports = router;
