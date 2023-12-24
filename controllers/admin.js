const Product = require('../models/Product')
exports.getDashboard = async (req,res)=>{
    const products = await Product.find()
    res.render('admin/dashboard', {
        title : "dashboard",
        path : req.path,
        products
    })
}
exports.deleteProds = async (req,res )=>{
    const id = req.prams.prodId
    console.log(id);
}