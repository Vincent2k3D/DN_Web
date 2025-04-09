import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: String, required: true },
  },
  profilePicture: {
    type: String,
    default: "https://example.com/default-profile-picture.png",
  },
  role: {
    type: String,
    enum: ["user", "employee", "admin"],
    default: "user",
  },
  refreshToken: {
    type: String,
  },  
  isVerified: {
    type: Boolean,
    default: false,
  },
  verifyCode: {
    type: String,
  },
  verifyCodeExpire: {
    type: Date,
  },
  isBlocked: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: true,
});

const User = mongoose.model("User", userSchema);
export default User;
