import readlineSync from 'readline-sync';
import {
  askPlayerName,
  isEven,
  congratulatePlayer,
  generateNumber,
} from '..';

const MAX_WIN_COUNT = 3;
const MIN_NUMBER = 1;
const MAX_NUMBER = 100;

const getCorrectAnswer = number => (isEven(number) ? 'yes' : 'no');

const checkAnswerIsCorrect = (number, answer) => (answer === getCorrectAnswer(number));

export const startGame = () => {
  const userName = askPlayerName();

  for (let winCount = 0; winCount < MAX_WIN_COUNT;) {
    const numberToGuess = generateNumber(MIN_NUMBER, MAX_NUMBER);
    console.log(`Question: ${numberToGuess}`);
    const answer = readlineSync.question('Your answer: ');
    const answerIsCorret = checkAnswerIsCorrect(numberToGuess, answer);

    if (answerIsCorret) {
      console.log('Correct!');
      winCount += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${getCorrectAnswer(numberToGuess)}'.`);
    }
  }

  congratulatePlayer(userName);
};

export const getGameRules = () => console.log('Answer "yes" if number even otherwise answer "no".\n');

export default startGame;
