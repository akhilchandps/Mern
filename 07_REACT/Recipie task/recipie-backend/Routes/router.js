const express = require('express');
const UserControllers =  require('../Controllers/Usercontroller');

const router = express.Router()

router.post('/add-recipie',UserControllers.addUser )

router.get('/get-all-recipie',UserControllers.getRecipie)

router.get('/get-user-recipie/:id', UserControllers.getuserRecipie )

module.exports = router