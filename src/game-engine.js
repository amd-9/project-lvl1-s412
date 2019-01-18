import { startGame as startGameEven, getGameRules as rulesGameEven } from './games/game-even';
import { startGame as startGameCalc, getGameRules as rulesGameCalc } from './games/game-calc';
import { greetPlayer } from '.';

const runGame = (game, rules) => {
  greetPlayer();
  rules();
  game();
};

export const startBrainEven = () => runGame(startGameEven, rulesGameEven);
export const startBrainCalc = () => runGame(startGameCalc, rulesGameCalc);

export default runGame;
