// const POSITIONS = {
// - 0: [0, 1, 2],
// - 1: [3, 4, 5],
// - 2: [6, 7, 8],
// - 3: [0, 3, 6],
// - 4: [1, 4, 7],
// - 5: [2, 5, 8],
// - 6: [0, 4, 8],
// - 7: [2, 4, 6]
// }

const WIN_REG_EXPS = player => [
  `(^${player}{3})`,
  `(...${player}{3}...)`,
  `(${player}{3}$)`,
  `(^${player}..${player}..${player})`,
  `(^.${player}..${player}..${player})`,
  `(${player}..${player}..${player}$)`,
  `(^${player}...${player}...${player})`,
  `(..${player}.${player}.${player}..)`
]

export default player => new RegExp(WIN_REG_EXPS(player).join('|'))
