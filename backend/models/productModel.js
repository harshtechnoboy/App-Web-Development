import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema(
  {
    comment: { type: String, required: true },
    name: { type: String, required: true },
    rating: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const productSchema = new mongoose.Schema(
  {
    brand: { type: String, required: true },
    category: { type: String, required: true },
    countInStock: { type: Number, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    images: [String],
    name: { type: String, required: true, unique: true },
    numReviews: { type: Number, required: true },
    price: { type: Number, required: true },
    rating: { type: Number, required: true },
    reviews: [reviewSchema],
    slug: { type: String, required: true, unique: true },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model('Product', productSchema);
export default Product;
