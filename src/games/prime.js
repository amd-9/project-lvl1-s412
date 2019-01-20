import isPrime from 'check-prime';
import generateNumber from '../utils';
import runGame from '../game-engine';

const minNumber = 1;
const maxNumber = 700;

const startGameStage = () => {
  const question = generateNumber(minNumber, maxNumber);
  const answer = isPrime(question) ? 'yes' : 'no';

  return { question, answer };
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const game = () => runGame(startGameStage, description);

export default game;
