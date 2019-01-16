import readlineSync from 'readline-sync';

export const greetPlayer = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

export default greetPlayer;
