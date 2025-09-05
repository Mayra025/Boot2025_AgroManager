import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },
    password: { type: String, required: true, minlength: 6 }
  },
  { timestamps: true }
);

userSchema.methods.toPublic = function () {
  const { _id, name, email } = this;
  return { id: _id.toString(), name, email };
};

export const User = mongoose.model("User", userSchema);
