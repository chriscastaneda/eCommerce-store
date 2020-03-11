import mongoose from 'mongoose';
import shortid from 'shortid'; //generate unique id from shortid package

const {String} = mongoose.Schema.Types //import Mongoose string value package

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    sku: {
        type: String, 
        unique: true,
        default: shortid.generate()
    },
    description: {
        type: String,
        required: true
    },
    mediaUrl: {
        type: String,
        required: true
    },
})

export default mongoose.models.Product || mongoose.model('Product', ProductSchema);