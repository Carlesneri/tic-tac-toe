import GameModel from '../models/Game.js'

export const saveGame = async game => {
  const newGame = new GameModel(game)
  return newGame.save()
}

export const getUserGames = async user => {
  const games = await GameModel.find({ user })
  return games
}
export const deleteGames = async user => {
  const games = await GameModel.deleteMany({ user })
  return games
}
