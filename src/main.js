import readlineSync from 'readline-sync';
import startGame from './game.js';

const brainEven = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  startGame(name);
};

export default brainEven;
