import mongoose from 'mongoose'

const { Schema, model } = mongoose

const MoveSchema = new Schema({
  player: {
    type: String,
    enum: ['user', 'computer'],
    required: true
  },
  box: {
    type: Number,
    enum: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    required: true
  }
}, { timestamps: true })

const GameSchema = new Schema({
  result: {
    type: String,
    enum: ['win', 'lose', 'draw'],
    required: true
  },
  moves: {
    type: [MoveSchema],
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
}, { timestamps: true })

const GameModel = model('Games', GameSchema)

export default GameModel
