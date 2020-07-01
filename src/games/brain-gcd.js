import { askQuestion, giveFeedback } from '../helper/communicate.js';
import generateRandomInt from '../helper/random-int.js';

const findGcd = (a, b) => {
  if (!b) {
    return a;
  }

  return findGcd(b, a % b);
};

const getCorrectAnswer = (num1, num2) => {
  const gcd = findGcd(num1, num2);

  return gcd.toString();
};

const brainGcdRound = () => {
  const num1 = generateRandomInt(1, 100);
  const num2 = generateRandomInt(1, 100);
  const answer = askQuestion(`${num1} ${num2}`);
  const correctAnswer = getCorrectAnswer(num1, num2);
  giveFeedback(answer, correctAnswer);

  return answer === correctAnswer;
};

export default brainGcdRound;
