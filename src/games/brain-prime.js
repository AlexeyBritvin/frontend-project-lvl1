import generateRandomInt from '../helper/random-int.js';
import { game, createQuestionPair } from '../main.js';

const YES = 'yes';
const NO = 'no';
const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }

  return num > 1;
};

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
