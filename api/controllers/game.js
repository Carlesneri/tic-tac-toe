import { saveGame as saveGameInDB } from '../services/database.js'

export const saveGame = async (req, res) => {
  const { game } = req.body
  try {
    await saveGameInDB(game)
    res.json({
      message: 'Game saved successfully'
    })
  } catch (error) {
    res.json({
      message: 'Error saving game',
      error
    })
  }
}
