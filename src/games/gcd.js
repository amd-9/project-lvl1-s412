import gcd from 'gcd';
import generateNumber from '../utils';
import runGame from '../game-engine';

const minNumber = 1;
const maxNumber = 100;

const startGameStage = () => {
  const number1 = generateNumber(minNumber, maxNumber);
  const number2 = generateNumber(minNumber, maxNumber);
  const question = `${number1} ${number2}`;
  const answer = String(gcd(number1, number2));

  return { question, answer };
};

const description = 'Find the greatest common divisor of given numbers.';

const game = () => runGame(startGameStage, description);

export default game;
