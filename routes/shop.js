const express = require("express")
const router = express.Router()
const shopControllers = require('../controllers/shop')
router.get('/add-product', shopControllers.getAddProduct)
router.post('/add-product', shopControllers.postAddProduct)

router.post('/cart', shopControllers.postAddCart)
module.exports = router