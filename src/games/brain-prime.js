import { askQuestion, giveFeedback } from '../helper/communicate.js';
import generateRandomInt from '../helper/random-int.js';
import isPrime from '../helper/is-prime.js';

const YES = 'yes';
const NO = 'no';

const getCorrectAnswer = (num) => {
  if (isPrime(num)) {
    return YES;
  }

  return NO;
};

const brainPrimeRound = () => {
  const num = generateRandomInt(1, 100);
  const answer = askQuestion(num);
  const correctAnswer = getCorrectAnswer(num);
  giveFeedback(answer, correctAnswer);

  return answer === correctAnswer;
};

export default brainPrimeRound;
