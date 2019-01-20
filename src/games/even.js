import generateNumber from '../utils';
import runGame from '../game-engine';

const minNumber = 1;
const maxNumber = 100;

const isEven = number => number % 2 === 0;

const startGameStage = () => {
  const question = generateNumber(minNumber, maxNumber);
  const answer = isEven(question) ? 'yes' : 'no';
  return { question, answer };
};

const description = 'Answer "yes" if number even otherwise answer "no".';

const game = () => runGame(startGameStage, description);

export default game;
