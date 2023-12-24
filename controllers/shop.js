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
  console.log("req.user =>", req.user);
  const addCart = await req.user.addToCart(product);
  console.log("add cart =>", addCart);
  return res.redirect("/");
};
exports.getCart = async (req, res) => {
  try {
    const user = await req.user.populate("cart.SPN.prodId");

    const products = user.cart.SPN;
    products.forEach((p) => {
      console.log(p);
    });
    res.render("shop/cart", {
      path: "/cart",
      title: "Your Cart",
      products,
    });
  } catch (error) {
    console.log(error);
  }
};
exports.deleteCart = async (req,res)=>{
    const id = req.body.prodId
    const deleteUser = await req.user.removeFromCart(id);
	console.log(deleteUser);
	console.log("user delete");
	return res.redirect("/cart");
}