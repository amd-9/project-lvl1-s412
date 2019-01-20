import { generateNumber } from '..';
import runGame from '../game-engine';

const MIN_NUMBER = 1;
const MAX_NUMBER = 100;

const isEven = number => number % 2 === 0;

const startGameStage = () => {
  const question = generateNumber(MIN_NUMBER, MAX_NUMBER);
  const answer = isEven(question) ? 'yes' : 'no';
  return { question, answer };
};

const description = 'Answer "yes" if number even otherwise answer "no".';

export const game = () => runGame(startGameStage, description);

export default game;
