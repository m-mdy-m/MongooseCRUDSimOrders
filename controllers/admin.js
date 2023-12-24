const Product = require("../models/Product");
exports.getDashboard = async (req, res) => {
  const products = await Product.find();
  res.render("admin/dashboard", {
    title: "dashboard",
    path: req.path,
    products,
  });
};
exports.deleteProds = async (req, res) => {
  const id = req.params.prodId;
  try{
    await Product.findByIdAndDelete(id)
    console.log('delete user');
    return res.redirect('/dashboard')
  }catch(err){
    console.log(err);
  }
};
exports.getEdit = async (req,res)=>{
    const id = req.params.prodId
    const editMode = req.query.edit
    const products = await Product.findById(id)
    res.render('shop/add-product', {
        title : 'updateProduct',
        path : req.path,
        products,
        editMode,

    })
}
exports.postEdit = async (req,res)=>{
    const id = req.body.prodId
    const title = req.body.title
    const price = req.body.price
    const product = await Product.findByIdAndUpdate(id , {
        title,
        price
    })
    console.log('update Product =>', product);
    return res.redirect('/')
}