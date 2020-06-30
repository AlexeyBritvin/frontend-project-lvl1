import { getName } from './helper/communicate.js';
import NUMBER_OF_GAMES from './config/config.js';
import brainEvenRound from './games/brain-even.js';

const sayIntro = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};

const runGameRounds = (runGameRound) => {
  let round = 0;

  while (round < NUMBER_OF_GAMES) {
    const answerIsRight = runGameRound();

    if (answerIsRight) {
      round += 1;
    } else {
      return false;
    }
  }

  return true;
};

const runGame = (gameRound) => {
  console.log('Welcome to the Brain Games!');
  const name = getName();
  console.log(`Hello, ${name}!`);

  sayIntro();
  const success = runGameRounds(gameRound);

  if (!success) {
    return console.log(`Let's try again, ${name}!`);
  }

  return console.log(`Congratulations, ${name}`);
};

const brainEven = () => runGame(brainEvenRound);

export default brainEven;
