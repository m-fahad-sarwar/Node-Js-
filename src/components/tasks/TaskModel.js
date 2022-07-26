const mongoose = require("mongoose");
const { Schema } = mongoose;

const orderSchema = new Schema({
  title: String,
  createdAt: { type: Date, default: Date.now },
});
const OrderModel = mongoose.model("Tasks", orderSchema);
module.exports = OrderModel;