import {
  isEven,
  askQuestion,
  generateNumber,
  isCorrectAnswer,
} from '..';
import runGame from '../game-engine';

const MAX_WIN_COUNT = 3;
const MIN_NUMBER = 1;
const MAX_NUMBER = 100;

const startGame = () => {
  for (let winCount = 0; winCount < MAX_WIN_COUNT;) {
    const numberToGuess = generateNumber(MIN_NUMBER, MAX_NUMBER);
    const answer = askQuestion(`${numberToGuess}`);
    if (isCorrectAnswer(answer, isEven(numberToGuess) ? 'yes' : 'no')) {
      winCount += 1;
    }
  }
};

const getGameRules = () => console.log('Answer "yes" if number even otherwise answer "no".\n');

export const game = () => runGame(startGame, getGameRules);

export default game;
