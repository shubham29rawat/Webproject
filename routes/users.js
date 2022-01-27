const express = require('express');

const router = express.Router();
const passport = require('passport');
const usersController = require("../controller/users_controller")


router.get('/profile',passport.checkAuthentication, usersController.profile);
//req for sign up page
router.get('/sign-up', usersController.signUp);

//req sign in page
router.get('/sign-in', usersController.signIn);

//post data for sign up in db
router.post('/create', usersController.create);
// //post crating the session- for log in
// router.post('/create-session', usersController.createSession);

//create a route to craete session
router.post('/create-session',passport.authenticate('local',
{failureRedirect:'/users/sign-in'},
),usersController.createSession);




module.exports = router;


