import mongoose from 'mongoose'

const { Schema, model } = mongoose

const BoxSchema = new Schema({
  player: {
    type: Number,
    // 0: not played, 1: user, 2: computer
    enum: [0, 1, 2],
    required: true
  },
  throw: {
    type: Number,
    // 0: not filled
    enum: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    required: true
  }
})

const GameSchema = new Schema({
  result: {
    type: String,
    enum: ['win', 'lose', 'draw'],
    required: true
  },
  boxes: {
    type: [BoxSchema],
    required: true
  },
  user: {
    type: String,
    required: true
  }
}, { timestamps: true })

const GameModel = model('Games', GameSchema)

export default GameModel
