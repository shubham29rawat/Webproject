// const { route } = require('express/lib/application');
const express = require('express');

const router = express.Router(); 
const homeController = require('../controller/home_controller')

console.log("router loaded")

router.get('/', homeController.home)
router.use('/users', require("./users"))
router.use('/posts', require("./posts"))


module.exports = router; //export to be call
