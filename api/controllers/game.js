import { saveGame as saveGameInDB, getUserGames as getDBUserGames, deleteGames as deleteDBUserGames } from '../services/database.js'
import { COOKIE_SESSION_NAME } from '../config.js'

export const saveGame = async (req, res) => {
  const { game } = req.body
  const sessionID = req.cookies[COOKIE_SESSION_NAME]
  try {
    await saveGameInDB({ user: sessionID, ...game })
    res.json({
      message: 'Game saved successfully'
    })
  } catch (error) {
    console.error(error)
    res.json({
      message: 'Error saving game'
    })
  }
}

export const getUserGames = async (req, res) => {
  const sessionID = req.cookies[COOKIE_SESSION_NAME]
  try {
    const userGames = await getDBUserGames(sessionID)
    res.json({ games: userGames })
  } catch (error) {
    console.error(error)
    res.json({
      message: 'Error getting user games'
    })
  }
}

export const deleteUserGames = async (req, res) => {
  const sessionID = req.cookies[COOKIE_SESSION_NAME]
  try {
    await deleteDBUserGames(sessionID)
    res.json({ message: 'Games deleted' })
  } catch (error) {
    console.error(error)
    res.json({
      message: 'Error deleting games'
    })
  }
}
