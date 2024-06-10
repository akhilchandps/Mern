const express = require('express')
const ProtectRoute = require('../Middileware/protectRoute')
const router = express.Router()

const messageController = require('../Controllers/messageController')

router.post('/send/:id', ProtectRoute, messageController.SendMessage)

module.exports = router;