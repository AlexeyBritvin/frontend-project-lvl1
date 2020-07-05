import generateRandomInt from '../helper/random-int.js';
import { game, createQuestionPair } from '../main.js';

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

const brainGcdQuestion = () => {
  const num1 = generateRandomInt(1, 100);
  const num2 = generateRandomInt(1, 100);
  const question = `${num1} ${num2}`;
  const answer = getAnswer(num1, num2);
  return createQuestionPair(question, answer);
};

const brainGcdGame = () => game(description, brainGcdQuestion);

export default brainGcdGame;
