import generateRandomInt from '../helper/random-int.js';
import startGame from '../main.js';
import { createQuestionPair } from '../helper/create-question.js';

const YES = 'yes';
const NO = 'no';
const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  const sqrt = Math.round(Math.sqrt(num));

  for (let i = 2; i < sqrt; i += 1) {
    if (num % i === 0) return false;
  }

  return num > 1;
};

const getAnswer = (num) => (isPrime(num) ? YES : NO);

const genGameRoundData = () => {
  const num = generateRandomInt(1, 100);
  const answer = getAnswer(num);
  return createQuestionPair(num, answer);
};

const runBrainPrimeGame = () => startGame(description, genGameRoundData);

export default runBrainPrimeGame;
