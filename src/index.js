import readlineSync from "readline-sync";

export  const greetPlayer = () => {
    let userName = readlineSync.question("May I have your name? ");
    console.log(`Hello, ${userName}!`);
}

