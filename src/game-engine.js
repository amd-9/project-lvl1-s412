import { startGame as startGameEven, getGameRules as rulesGameEven } from './games/game-even';
import { startGame as startGameCalc, getGameRules as rulesGameCalc } from './games/game-calc';
import { startGame as startGameGcd, getGameRules as rulesGameGcd } from './games/game-gcd';
import { greetPlayer } from '.';

const runGame = (game, rules) => {
  greetPlayer();
  rules();
  game();
};

export const startBrainEven = () => runGame(startGameEven, rulesGameEven);
export const startBrainCalc = () => runGame(startGameCalc, rulesGameCalc);
export const startBrainGcd = () => runGame(startGameGcd, rulesGameGcd);

export default runGame;
