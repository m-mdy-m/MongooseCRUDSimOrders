const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const User = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  cart: {
    SPN: [
      {
        prodId: {
          type: Schema.Types.ObjectId,
          required: true,
        },
        number: {
          type: Number,
          required: true,
        },
      },
    ],
  },
});
User.methods.clearCart = function(){
    this.cart = { SPN : []}
    return this.save()
}
User.methods.removeFromCart =function (productId) {
	const updateCartItems = this.cart.SPN.filter(item => {
		return item.prodId.toString() !== productId.toString();
	});
	this.cart.SPN = updateCartItems
    return this.save()
};

User.methods.addToCart = async function (product) {
  if (!this.cart) {
    this.cart = { SPN: [] };
  }
  const carts = this.cart.SPN;
  const cartsIndex = carts.findIndex((i) => {
    return i.prodId.toString() === product._id.toString();
  });
  const copyCart = [...carts];
  let number = 1;
  if (cartsIndex > 0) {
    number = copyCart[cartsIndex].number + 1;
    copyCart[cartsIndex].number = number;
  } else {
    copyCart.push({
      prodId: product._id,
      number,
    });
  }
  const UpdateCart = {
    SPN: copyCart,
  };
  this.cart = UpdateCart
  return this.save()
};
module.exports = mongoose.model("User", User);
