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
    SPN: {
      prodID: {
        type: Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      number: {
        type: Number,
        required: true,
      },
    },
  },
});

User.method.addCart = async function (product) {
  if (!this.cart) {
    this.cart = { SPN: [] };
  }
  const carts = this.cart.SPN;
  // const cartIndex = carts.findIndex(spn =>{
  //     return spn.prod
  // })
  let baseNumbers = 1;
  const upCart = [...carts];
  upCart.push({
    prodId: product._id,
    number: baseNumbers,
  });
  const updateCart = {
    SPN: upCart,
  };
  this.cart = updateCart;
  return await this.save();
};
module.exports = mongoose.model("User", User);
