import { Schema, model } from 'mongoose'

const UserSchema = new Schema({
  id: {
    type: String,
    required: true
  }
}, { timestamps: true })

const UserModel = model('Users', UserSchema)

export default UserModel
