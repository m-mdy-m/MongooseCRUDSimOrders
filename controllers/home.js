const Product = require('../models/Product')

exports.getHome = async (req,res,nxt )=>{
    const products = await Product.find()
    res.render('home', {
        title : "HOMe",
        path : req.path ,
        products
    })
}