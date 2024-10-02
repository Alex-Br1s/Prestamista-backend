const express = require('express')
const userControllers = require('../controllers/userControllers')

const router = express.Router()

router.get('/api/all/users', userControllers.getAllUser)
router.post('/api/create/user', userControllers.createUser)
router.patch('/api/update/user/:id', userControllers.updateUser)
router.delete('/api/delete/user/:id', userControllers.deleteUser)
router.get('/api/users/canceled', userControllers.getCanceledUsers)
router.get('/api/users/payments', userControllers.getUserPaymentHistory)
router.get('/api/users/pending-payments', userControllers.getUsersPendingPayments)
module.exports = router