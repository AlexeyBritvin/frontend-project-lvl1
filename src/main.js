import NUMBER_OF_GAMES from './config/config.js';
import brainCalcRound from './games/brain-calc.js';
import brainEvenRound from './games/brain-even.js';
import brainGcdRound from './games/brain-gcd.js';
import brainProgressionRound from './games/brain-progression.js';
import { getName } from './helper/communicate.js';
import { gameTypes, getIntro } from './helper/intro.js';

const sayIntro = (gameType) => {
  const intro = getIntro(gameType);

  console.log(intro);
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

const runGame = (gameType, gameRound) => {
  console.log('Welcome to the Brain Games!');
  const name = getName();
  console.log(`Hello, ${name}!`);

  sayIntro(gameType);
  const success = runGameRounds(gameRound);

  if (!success) {
    return console.log(`Let's try again, ${name}!`);
  }

  return console.log(`Congratulations, ${name}`);
};

export const brainEven = () => runGame(gameTypes.brainEven, brainEvenRound);

export const brainCalc = () => runGame(gameTypes.brainCalc, brainCalcRound);

export const brainGcd = () => runGame(gameTypes.brainGcd, brainGcdRound);

export const brainProgression = () => runGame(gameTypes.brainProgression, brainProgressionRound);
