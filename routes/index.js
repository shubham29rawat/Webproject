const express = require('require');

const router = express.Router();
const homeController = require('../controller/home_controller')

console.log("router loaded")

router.get('/', homeController.home)

module.exports = router;