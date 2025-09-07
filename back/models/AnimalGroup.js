import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema(
  {
    text: String,
    checked: { type: Boolean, default: false }
  },
  { _id: false }
);

const AnimalGroupSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    subtitle: { type: String },
    count: { type: Number, default: 0 },
    items: [ItemSchema],
    additionalInfo: { type: String }
  },
  { timestamps: true }
);

export default mongoose.model("AnimalGroup", AnimalGroupSchema);
