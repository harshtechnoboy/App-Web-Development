import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
  {
    orderItems: [
      {
        image: { type: String, required: true },
        name: { type: String, required: true },
        price: { type: Number, required: true },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product',
          required: true,
        },
        quantity: { type: Number, required: true },  
        slug: { type: String, required: true },  
      },
    ],
    shippingAddress: {
      fullName: { type: String, required: true },
      address: { type: String, required: true },
      city: { type: String, required: true },
      postalCode: { type: String, required: true },
      country: { type: String, required: true },
      location: {
        address: String,
        name: String,
        vicinity: String,
      },
    },
    paymentMethod: { type: String, required: true },
    paymentResult: {
      email_address: String,
      id: String,
      status: String,
      update_time: String,
    },
    deliveredAt: { type: Date },
    isDelivered: { type: Boolean, default: false },
    isPaid: { type: Boolean, default: false },
    itemsPrice: { type: Number, required: true },
    paidAt: { type: Date },
    shippingPrice: { type: Number, required: true },
    taxPrice: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model('Order', orderSchema);
export default Order;
