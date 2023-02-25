import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
    {
        customer: {
            type: String,
            required: true,
        },
        products: {
            type: [
                {
                    type: Object,
                    required: true,
                },
            ]
        },
        address : {
            type : String,
            required: true
        },
        email : {
            type : String,
            required: true
        },
        phone : {
            type: String,
            required: true
        },
        total : {
            type : Number,
            required: true
        },
        status : {
            type : Number,
            required: true
        },
        method : {
            type : Number,
            required: true
        },
        dekont : {
            type : String,
        },
        shipping : {
            type : String,
            default: null,
        },
        shipping_code: {
            type: String,
            default: null,
        },
        isAccept:{
            type: Number,
            default: 0
        }
    },
    {timestamps: true}
);

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);