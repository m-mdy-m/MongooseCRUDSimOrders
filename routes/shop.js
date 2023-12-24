const express = require("express")
const router = express.Router()
const shopControllers = require('../controllers/shop')
router.get('/add-product', shopControllers.getAddProduct)
router.post('/add-product', shopControllers.postAddProduct)

router.post('/cart', shopControllers.postAddCart)
router.get('/cart', shopControllers.getCart)
router.post('/cart-delete-item', shopControllers.deleteCart)


router.post('/create-order', shopControllers.postOrder)

router.get("/orders", shopControllers.getOrders);
module.exports = router