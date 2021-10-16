import { Schema, model } from 'mongoose'

const UserSchema = new Schema({
  authentication: {
    type: String,
    enum: ['Google'],
    required: true
  },
  id: {
    type: String,
    required: true
  }
}, { timestamps: true })

const UserModel = model('Users', UserSchema)

export default UserModel
