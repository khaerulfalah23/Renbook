import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
  name: String,
  email: {
    type: String,
    trim: true,
    minlength: 3,
  },
  photoURL: String,
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
});

const User = models.User || model('User', UserSchema);

export default User;
