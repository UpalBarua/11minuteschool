import bcrypt from "bcryptjs";
import mongoose from "mongoose";

import { validateEmail } from "../../configs/validation";
import type { TUser } from "./user.type";

const userSchema = new mongoose.Schema<TUser>({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    validate: [validateEmail, "Email contains invalid characters."],
  },
  password: {
    type: String,
    required: true,
    minlength: [6, "Password must be at least 6 characters long."],
  },
});

userSchema.pre("save", async function(next) {
  const user = this;

  if (user.isNew || user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 12);
  }

  next();
});

const User = mongoose.model<TUser>("User", userSchema);
export default User;
