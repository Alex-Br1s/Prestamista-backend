const express = require('express')
const userControllers = require('../controllers/userControllers')

const router = express.Router()

router.get('/api/allUsers', userControllers.getAllUser)
router.post('/api/createUser', userControllers.createUser)
router.patch('/api/updateUser/:id', userControllers.updateUser)
router.delete('/api/deleteUser/:id', userControllers.deleteUser)
router.get('/api/allUsers/canceled', userControllers.getCanceledUsers)
router.get('/api/allUsers/payments', userControllers.getUserPaymentHistory)

module.exports = router