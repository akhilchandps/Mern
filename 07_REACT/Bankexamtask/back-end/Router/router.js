const express = require('express');
const UserController = require('../Controllers/userController')

const router = express.Router();


router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.post('/deposit', UserController.deposit);
router.post('/withdraw', UserController.withdraw)


module.exports =router

