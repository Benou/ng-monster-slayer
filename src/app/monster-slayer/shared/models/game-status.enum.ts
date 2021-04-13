export enum GameStatus {
  SLAYERING = 'SLAYERING',
  VICTORY = 'VICTORY',
  DRAW = 'DRAW',
  DEFEAT = 'DEFEAT',
  SURRENDER = 'SURRENDER'
}

export const gameOverReasons = new Map<GameStatus, string>([
  [GameStatus.SLAYERING, 'You are still Slayering!'],
  [GameStatus.VICTORY, 'You Won!'],
  [GameStatus.DRAW, 'It\'s a Draw!'],
  [GameStatus.DEFEAT, 'You Lose!'],
  [GameStatus.SURRENDER, 'You Surrendered!']
]);
