import GameModel from '../models/Game.js'

export const saveGame = async game => {
  const newGame = new GameModel(game)
  console.log(newGame)
  return newGame.save()
}
