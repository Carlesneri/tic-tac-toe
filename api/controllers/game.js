import { saveGame as saveGameInDB } from '../services/database.js'
import { COOKIE_SESSION_NAME } from '../config.js'

export const saveGame = async (req, res) => {
  const { game } = req.body
  const sessionID = req.cookies[COOKIE_SESSION_NAME]
  console.log({ sessionID })

  try {
    await saveGameInDB({ user: sessionID, ...game })
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
