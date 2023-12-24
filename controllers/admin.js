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