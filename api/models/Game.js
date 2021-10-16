import mongoose from 'mongoose'

const { Schema, model } = mongoose

const MoveSchema = new Schema({
  player: {
    type: String,
    enum: ['Player', 'Computer'],
    required: true
  },
  box: {
    type: Number,
    required: true
  }
})

const GameSchema = new Schema({
  result: Boolean,
  moves: [MoveSchema],
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
}, { timestamps: true })

const GameModel = model('Games', GameSchema)

export default GameModel
