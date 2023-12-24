const express =require('express')
const router = express.Router()
const adminControllers = require('../controllers/admin')

router.get('/dashboard', adminControllers.getDashboard)
router.delete('/dashboard/:prodId', adminControllers.deleteProds)
module.exports = router