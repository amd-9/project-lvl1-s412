import readlineSync from 'readline-sync';

export const greetPlayer = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export const congratulatePlayer = (userName) => {
  console.log(`Congratulations, ${userName}!`);
};

export default greetPlayer;
