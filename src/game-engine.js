import { startGame as startGameEven, getGameRules as rulesGameEven } from './games/game-even';

const runGame = (game, rules) => {
  rules();
  game();
};

export const startBrainEven = () => runGame(startGameEven, rulesGameEven);

export default runGame;
