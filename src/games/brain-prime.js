import generateRandomInt from '../helper/random-int.js';
import isPrime from '../helper/is-prime.js';
import { game, createQuestionPair } from '../main.js';

const YES = 'yes';
const NO = 'no';
const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getAnswer = (num) => {
  if (isPrime(num)) {
    return YES;
  }

  return NO;
};

const brainPrimeQuestion = () => {
  const num = generateRandomInt(1, 100);
  const answer = getAnswer(num);
  return createQuestionPair(num, answer);
};

const brainPrimeGame = () => game(description, brainPrimeQuestion);

export default brainPrimeGame;
