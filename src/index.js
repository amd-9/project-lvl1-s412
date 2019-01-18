import readlineSync from 'readline-sync';

export const greetPlayer = () => console.log('Welcome to the Brain Games');

export const askPlayerName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export const congratulatePlayer = (userName) => {
  console.log(`Congratulations, ${userName}!`);
};

export const isEven = number => number % 2 === 0;

export default greetPlayer;
