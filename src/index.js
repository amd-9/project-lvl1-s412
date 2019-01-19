import readlineSync from 'readline-sync';
import rn from 'random-number';

export const greetPlayer = () => console.log('Welcome to the Brain Games');

export const askPlayerName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  return userName;
};

export const congratulatePlayer = (userName) => {
  console.log(`Congratulations, ${userName}!`);
};

export const isEven = number => number % 2 === 0;

export const generateNumber = (minValue, maxValue) => {
  const numberGenerator = rn.generator({
    min: minValue,
    max: maxValue,
    integer: true,
  });

  return numberGenerator();
};

export const askQuestion = (questionText) => {
  console.log(`Question: ${questionText}`);
  return readlineSync.question('Your answer: ');
};

export const isCorrectAnswer = (userAnswer, correctAnswer) => {
  const isCorrect = userAnswer === correctAnswer;

  if (isCorrect) {
    console.log('Correct!');
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  }

  return isCorrect;
};

export const reduceArray = (func, acc, array) => {
  if (array.length === 0) {
    return acc;
  }

  return reduceArray(func, func(array.shift(), acc), array);
};

export default greetPlayer;
