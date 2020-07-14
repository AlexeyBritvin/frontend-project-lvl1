import generateRandomInt from '../helper/random-int.js';
import startGame from '../main.js';
import { createQuestionPair } from '../helper/create-question.js';

const YES = 'yes';
const NO = 'no';
const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  const maxDivisor = Math.sqrt(num);

  for (let divisor = 2; divisor < maxDivisor; divisor += 1) {
    if (num % divisor === 0) return false;
  }

  return num > 1;
};

const getAnswer = (num) => (isPrime(num) ? YES : NO);

const genGameRoundData = () => {
  const question = generateRandomInt(1, 100);
  const answer = getAnswer(question);
  return createQuestionPair(question.toString(), answer);
};

const runBrainPrimeGame = () => startGame(description, genGameRoundData);

export default runBrainPrimeGame;
