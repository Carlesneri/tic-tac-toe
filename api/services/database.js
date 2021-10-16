import GameModel from '../models/Game.js'

export const saveGame = async game => {
  const newGame = new GameModel(game)
  return newGame.save()
}
