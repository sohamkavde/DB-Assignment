// Import necessary modules if needed
import mongoose from "mongoose";

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/Mystore")
.then(() => {
    console.log("Connected to MongoDB...");
}).catch(err => {
    console.error("Error connecting to MongoDB:", err);
});

// Define schema for Product Category
const ProductCategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    created_at: {
        type: Date,
        default: Date.now
    },
    modified_at: {
        type: Date,
        default: Date.now
    },
    deleted_at: Date
});

// Define schema for Product Inventory
const ProductInventorySchema = new mongoose.Schema({
    quantity: Number,
    created_at: {
        type: Date,
        default: Date.now
    },
    modified_at: {
        type: Date,
        default: Date.now
    },
    deleted_at: Date
});

// Define schema for Discount
const DiscountSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    discount_percent: Number,
    active: Boolean,
    created_at: {
        type: Date,
        default: Date.now
    },
    modified_at: {
        type: Date,
        default: Date.now
    },
    deleted_at: Date
});

// Define schema for Product
const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    SKU: String,
    category_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ProductCategory',
        required: true
    },
    inventory_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ProductInventory'
    },
    price: Number,
    discount_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Discount'
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    modified_at: {
        type: Date,
        default: Date.now
    },
    deleted_at: Date
});

// Export the schemas
export const ProductCategory = mongoose.model('ProductCategory', ProductCategorySchema);
export const ProductInventory = mongoose.model('ProductInventory', ProductInventorySchema);
export const Discount = mongoose.model('Discount', DiscountSchema);
export const Product = mongoose.model('Product', ProductSchema);
