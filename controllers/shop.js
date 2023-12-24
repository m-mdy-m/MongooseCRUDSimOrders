const Product = require('../models/Product')
exports.postAddProduct = async (req,res,nxt)=>{
    const  title = req.body.title
    const price = req.body.price
    const product = await Product.create({
        title,
        price
    })
    console.log('Create Product :', product);
    return res.redirect('/')
}
exports.getAddProduct = async(req,res,nxt)=>{
    res.render('shop/add-product', {
      title  : "add product",
      path : req.path,
      editMode : false,  
    })
}