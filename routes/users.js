const express = require('express');

const router = express.Router();

const usersController = require("../controller/users_controller")


router.get("/profile", usersController.profile);
//req for sign up page
router.get('/sign-up', usersController.signUp);

//req sign in page
router.get('/sign-in', usersController.signIn);

//post data for sign up in db
router.post('/create', usersController.create);
//post crating the session- for log in
router.post('/create-session', usersController.createSession);


module.exports = router;


