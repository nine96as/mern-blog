import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: [true, 'This username already exists!']
    },
    password: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

export const User = mongoose.model('User', userSchema);
