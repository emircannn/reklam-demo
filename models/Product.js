import mongoose from "mongoose";
import { string } from "yup";

const ProductSchema = new mongoose.Schema(
    {
        title : {
            type: String,
            required: true,
        },
        desc: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        properties: {
            type: [
                {
                    name: {type: String, required: true},
                    price: {type: Number, required: true},
                },
            ]
        },
        afterprint: {
            type: [
                {
                    afname: {type: String, required: true},
                    afprice: {type: Number, required: true},
                },
            ]
        },
        prodetails: {
            type: [
                {
                    dtitle: {type: String},
                    dparagraph: {type: String},
                },
            ]
        },
        info: {
            type: [
                {
                    ititle: {type: String},
                    iparagraph: {type: String},
                },
            ]
        },
        price: {
            type: Boolean,
            default: false
        },
        isActive: {
            type: Boolean,
            default: true
        },
        favori: {
            type: Boolean,
            default: false
        },
        img: {
            type: [String],
            required: true
        },
        isDesign: {
            type: Boolean,
            required: true
        },
        subcategory: {
            type: String,
        },
    },
    {timestamps: true}
)

export default mongoose.models.Product || mongoose.model("Product", ProductSchema)