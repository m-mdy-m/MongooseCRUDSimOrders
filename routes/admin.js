const express =require('express')
const router = express.Router()
const adminControllers = require('../controllers/admin')

router.get('/dashboard', adminControllers.getDashboard)
router.post('/dashboard/:prodId', adminControllers.deleteProds)

router.get('/edit-product/:prodId', adminControllers.getEdit)
module.exports = router