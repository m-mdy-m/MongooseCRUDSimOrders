const Product = require("../models/Product");
exports.postAddProduct = async (req, res, nxt) => {
  const title = req.body.title;
  const price = req.body.price;
  const userId = req.user;
  const product = await Product.create({
    title,
    price,
    userId,
  });
  console.log("Create Product :", product);
  return res.redirect("/");
};
exports.getAddProduct = async (req, res, nxt) => {
  res.render("shop/add-product", {
    title: "add product",
    path: req.path,
    editMode: false,
  });
};

exports.postAddCart = async (req, res) => {
    const prodId = req.body.prodId;
    const product = await Product.findById(prodId);
    console.log('req.user =>',req.user)
    const addCart = await req.user.addCart(product);
    console.log("added to cart =>", addCart);
    return res.redirect("/");
  };