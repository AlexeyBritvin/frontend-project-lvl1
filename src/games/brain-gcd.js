import generateRandomInt from '../helper/random-int.js';
import startGame from '../main.js';
import { createQuestionPair } from '../helper/create-question.js';

const description = 'Find the greatest common divisor of given numbers.';

const findGcd = (a, b) => {
  if (!b) {
    return a;
  }

  return findGcd(b, a % b);
};

const getAnswer = (num1, num2) => {
  const gcd = findGcd(num1, num2);

  return gcd.toString();
};

const genGameRoundData = () => {
  const num1 = generateRandomInt(1, 100);
  const num2 = generateRandomInt(1, 100);
  const question = `${num1} ${num2}`;
  const answer = getAnswer(num1, num2);
  return createQuestionPair(question, answer);
};

const runBrainGcdGame = () => startGame(description, genGameRoundData);

export default runBrainGcdGame;
