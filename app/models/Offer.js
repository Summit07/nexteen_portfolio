import mongoose, { Schema, models } from "mongoose";

const offerSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      maxlength: 10,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    tmessage: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

mongoose.models = {};
const offerModel = models.Offer || mongoose.model("Offer", offerSchema);
export default offerModel;
