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
      prodId: {
        type: Schema.Types.ObjectId,
        ref: "Product",
        // required: true,
      },
      number: {
        type: Number,
        // required: true,
      },
    },
  },
});

User.methods.addCart = async function (product) {
  const carts = this.cart.SPN;
  console.log("carts =>", typeof this.cart.SPN);
  const cartsIndex = carts.findIndex((index) => {
    return index.prodId.toString() === product._id.toString();
  });
  const upCart = [...carts];
  let number = 1;
  if (cartsIndex >= 0) {
    number = carts[cartsIndex].number + 1;
    carts[cartsIndex].number = number;
  } else {
    upCart.push({
      prodId: product._id,
      number,
    });
  }
  const updateCart = {
    SPN: upCart,
  };
  this.cart = updateCart;
  return await this.save();
};
module.exports = mongoose.model("User", User);
