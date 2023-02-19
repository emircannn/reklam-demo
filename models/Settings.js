import mongoose from "mongoose";

const SettingsSchema = new mongoose.Schema(
    {
        shippingWage : {
            type: Number,
        },
        designWage: {
            type: Number,
        },
        freeShipping: {
            type: Number,
        },
        minwage: {
            type: Number,
            default: 200
        },
        address: {
            type: String
        },
        phone: {
            type: String
        },
        email: {
            type: String
        },
    }
)

export default mongoose.models.Settings || mongoose.model("Settings", SettingsSchema)