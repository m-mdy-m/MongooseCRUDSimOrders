const express =require('express')
const router = express.Router()
const adminControllers = require('../controllers/admin')

router.get('/dashboard', adminControllers.getDashboard)

module.exports = router